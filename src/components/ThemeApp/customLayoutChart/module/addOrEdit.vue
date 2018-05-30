<template>
    <div class="addOrEdit-container">
        <div class="left-panel" :class="{ 'gripOpen': gripOpen, 'gripClose': !gripOpen }">
            <div class="left-panel-inner">
                <div class="list-panel">
                    <div class="title">微分析模块工具栏</div>

                    <div class="list" id="list">
                        <div class="list-inner" ref="list-inner-sortable">

                            <div class="item theme-item" v-for="item in themeData" :class="item.picType" :name="item.id">
                                <div class="item-title">{{item.name}}</div>
                                <div class="bg-img"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grip" @click="onLeftPanelGrip"></div>
        </div>
        <div class="center-panel">
            <div class="echarts-area" :class="{'echarts-area-add': saveState === 'add'}">
                    <vLayoutParentBox :keyId="keyId" :isEdit="isEdit_layout" :pdata="pdata" ref="vLayoutParentBox"></vLayoutParentBox>
                <div class="btn-switch-layout" @click="onSwitchLayout" v-if="saveState === 'add'">布局切换</div>
            </div>
        </div>
        <div class="right-panel">
            <div class="btn-panel" :class="{ 'btn-panel-close': !rightGripOpen }">
                <div class="btn-icon" title="保存" @click="onSave_name">
                    <i class="iconfont icon-iconset0237"></i>
                </div>
                <div class="btn-icon" title="" @click="onRightPanelClose">
                    <i class="iconfont icon-jinru"></i>
                </div>
            </div>
        </div>

        <Modal v-model="modal_theme" class-name="addOrEdit-container-modal" width="360" transfer>
            <p slot="header" style="color:#333;text-align:left;">
                <span>{{saveState ==='add'? '新增主题分析':'更新主题分析'}}</span>
            </p>
            <div>
                <Form ref="ref_theme" :model="themeForm" :label-width="80" :rules="ruleValidate">
                    <FormItem label="主题名称:" prop="theme_name">
                        <Input v-model="themeForm.theme_name" placeholder="请输入主题名称"></Input>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">

                <Button type="primary" size="large" long @click="onSave">保存</Button>
            </div>
        </Modal>
    </div>

</template>

<script>
    import Iscroll from 'iscroll';
    import Sortable from 'sortablejs';
    import vLayoutParentBox from './layout/layoutParentBox';
    import Utils from '../../../../libs/utils';
    export default {
        name: "addOrEdit",
        data() {
            return {
                // 自定义主题分析标识
                customId: '',
                saveState: 'add',   // 当前状态 'add': 新增； 'saveState': 更新

                modal_theme: false,
                themeForm: {
                    theme_name: ''
                },

                gripOpen: true,
                rightGripOpen: true,
                // 布局
                keyId: '2',           // 布局类型 当前有4种布局类型。 ['1'|'2'|'3'|'4']
                isEdit_layout: true,  // 布局是否是可拖放状态
                pdata: [],            // 布局数据信息

                // 指标列表数据
                themeData: [],
                layoutData: [],

                ruleValidate: {
                    theme_name: {
                        required: true,
                        message: '主题名称不能为空！',
                        trigger: 'blur'
                    }
                }
            };
        },
        created() {
            if(this.$route.params.customId) {
                this.customId = this.$route.params.customId;
                this.saveState = 'update';
            }
            else {
                this.saveState = 'add';
            }
        },
        components: { vLayoutParentBox },
        watch: {
            customId(val, oldVal) {
                if (val !== '') {
                    this.getThemeLayoutByCustomId();
                }
            }
        },
        mounted() {
            // var scroll = new Iscroll('#list',{
            //     mouseWheel: true,
            //     scrollbars: true,
            //     // scrollbars: 'custom',
            //     mouseWheelSpeed: 10,
            //     fadeScrollbars: true,
            //
            // });

            this.setThemeSortable();
            this.getThemeData();
        },
        methods: {
            onLeftPanelGrip() {
                this.gripOpen = !this.gripOpen;
            },
            onRightPanelClose() {
                this.$router.push({
                    name: 'showFace'
                });
            },
            // 切换布局
            onSwitchLayout() {
                if (this.keyId === '2') { this.keyId = '4'; }
                else if (this.keyId === '4') { this.keyId = '2'; }
            },
            
            // ajax获取主题指标
            getThemeData() {
                var that = this;
                this.$http({
                    url: '/ocean/theme/microanalysis/list',
                    methods: 'get'
                }).then(function (response) {
                    if (response.status === 1) {
                        that.themeData = response.result;
                    }
                    
                }).catch(function (e) {

                });
            },

            getThemeLayoutByCustomId() {
                var that = this;
                this.$http({
                    url: '/ocean/theme/customAnalysis/detail',
                    methods: 'get',
                    params: {
                        customAnalysisId: that.customId
                    }
                }).then(function (response) {
                    console.dir(response);
                    if (response.status === 1) {
                        var layoutContent = response.result.layoutContent;
                        layoutContent = eval(layoutContent)[0];

                        that.keyId = layoutContent.keyId;
                        that.pdata = layoutContent.json;

                        that.themeForm.theme_name = response.result.themeName;
                    }

                }).catch(function (e) {

                });
            },

            // 设置指标拖放
            setThemeSortable() {
                var that = this;
                new Sortable(this.$refs['list-inner-sortable'], {
                    group: {
                        name: 'theme',
                        pull: 'clone',
                        put: false
                    },
                    sort: false,
                    animation: 150,
                    forceFallback: true,
                    // ghostClass: 'theme-model',
                    chosenClass: 'theme-model',
                    onStart(e) {

                    },
                    onEnd(e) {
                        if (e.from !== e.to) {

                            var id = e.item.getAttribute('name');
                            var attribute_name = e.to.parentNode.className.replace('sortable-item ', '');
                            e.to.removeChild(e.item);
                            that.$refs.vLayoutParentBox.setEchart(id, attribute_name);
                        }
                    }
                });
            },

            onSave_name() {
                this.modal_theme = true;
            },
            onSave() {
                var that = this;

                this.$refs['ref_theme'].validate((valid) => {
                    if (valid) {
                        var url;
                        var json = this.$refs.vLayoutParentBox.save();

                        console.log('json');
                        console.dir(json);

                        var ajax_data = {
                                themeName: that.themeForm.theme_name,
                                layoutContent: JSON.stringify([{
                                    keyId: that.keyId,
                                    json: json
                                }])
                            };


                        if (this.customId !== '') {
                            ajax_data.customAnalysisId = this.customId;
                            url = '/ocean/theme/customAnalysis/update';
                        }
                        else {
                            url = '/ocean/theme/customAnalysis/add';
                        }

                        this.$http({
                            url: url,
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            data: JSON.stringify(ajax_data)
                        }).then(function(response) {
                            if (response.status === 1) {

                                that.$Message.success({
                                    content: that.saveState ==='add'? '新增成功！':'更新成功！'
                                });

                                if (that.saveState === 'add') {
                                    that.customId = response.result;
                                    that.saveState = 'edit';
                                }
                            }
                            else {
                                that.$Message.error({
                                    content: response.errMsg
                                });
                            }

                            that.modal_theme = false;

                        }).catch(function (e) {

                        });
                    } else {

                    }
                });

            }
        }
    }
</script>

<style lang="scss">
    .addOrEdit-container {
        display: flex;
        padding-top: 15px;
        height: 100%;
        .left-panel {
            position: relative;
            width: 180px;
            height: 666px;
            color: #FFF;
            border-radius: 0 35px 35px 0;
            transition: all 0.5s;

            .left-panel-inner {
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 0 35px 35px 0;
                overflow: hidden;
                opacity: 1;
                transition: opacity 0.5s;

                .list-panel {
                    width: 180px;
                    height: 100%;

                    .title {
                        margin-top: 53px;
                        height: 33px;
                        font-size: 13px;
                        line-height: 33px;
                        text-align: center;
                        background-color: rgba(128,134,172,0.76);
                    }

                    .list {
                        position: relative;
                        height: 550px;
                        width: 180px;
                        overflow: hidden;
                        .list-inner {
                            min-height: 550px;
                            padding-bottom: 45px;
                        }

                        .item {
                            height: 30px;
                            margin: 20px 0;
                            cursor: pointer;

                            &.active{
                                .item-title {
                                    background-color: rgba(79,88,140, 1);
                                }
                            }

                            .item-title {
                                height: 100%;
                                width: 165px;
                                color: #FFF;
                                font-size: 12px;
                                line-height: 30px;
                                text-indent: 24px;
                                background-color: rgba(79,88,140, 0.25);
                                border-radius: 0 15px 15px 0;
                                &:hover {
                                    background-color: rgba(79,88,140, 1);
                                }
                            }
                        }

                    }
                }
            }

            &.gripOpen {
                margin-left: 0;

                .left-panel-inner {
                    opacity: 1;
                }

                .grip {
                    right: 0;
                    background-color: #a1a6c2;
                    border-radius: 5px 0 0 5px;

                    &:after {
                        left: 0px;
                        border-color: transparent #1c59a3 transparent transparent;
                    }
                }
            }

            &.gripClose {
                margin-left: -180px;
                .left-panel-inner {
                    opacity: 0;
                }
                .grip {
                    right: -12px;
                    background-color: #4778b4;
                    border-radius: 0 5px 5px 0;

                    &:after {
                        left: 4px;
                        border-color: transparent transparent transparent #FFF;
                    }
                }
            }

            .grip {
                position: absolute;
                top: 300px;
                right: 0;
                width: 12px;
                height: 69px;
                background-color: #a1a6c2;
                z-index: 9999;
                transition: all 0.5s;
                cursor: pointer;
                border-radius: 5px 0 0 5px;

                &:after {
                    box-sizing: content-box;
                    position: absolute;
                    top: 26px;
                    left: 0px;
                    display: block;
                    content: " ";
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 9px 4px;
                    border-color: transparent #1c59a3 transparent transparent;
                    z-index: 1;
                    transition: all 0.5s;
                }
            }
        }
        .center-panel {
            flex: 1;

            .echarts-area {
                position: relative;
                margin: 0 auto;
                width: 1100px;
                height: 666px;
                border: 1px solid #142066;
                border-radius: 35px 35px 35px 35px;
                background-color: rgba(255, 255, 255, 0.1);

                &.echarts-area-add {
                    border-radius: 35px 35px 0 35px;
                }

                .btn-switch-layout {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 52px;
                    height: 52px;
                    padding: 25px 0 0 25px;
                    text-align: center;
                    line-height: 13px;
                    color: #FFF;
                    background: linear-gradient(-45deg, rgba(20,32,102, 0.7) 50%, rgba(20,32,102, 0.7) 50%, transparent 50%, transparent 100%);
                    cursor: pointer;

                    &:hover {
                        background: linear-gradient(-45deg, rgba(20,32,102, 1) 50%, rgba(20,32,102, 1) 50%, transparent 50%, transparent 100%);
                    }
                }
            }
        }

        .right-panel {
            position: relative;
            width: 46px;
            height: 666px;

            .btn-panel {
                position: absolute;
                top: 203px;
                right: 0;
                padding: 20px 0;
                width: 46px;
                height: 260px;
                background-color: #FFF;
                border-width: 1px 0 1px 1px;
                border-color: #8cb3ec;
                border-style: solid;
                border-radius: 35px 0 0 35px;
                z-index: 2;
                transition: all 0.5s;
                /*box-shadow: 0 0 5px #ececec;*/

                &.btn-panel-close {
                    right: -46px;
                }

                .btn-icon {
                    margin-top: 9px;
                    width: 46px;
                    text-align: center;
                    cursor: pointer;

                    &:hover {
                        color: #0086b3;
                    }

                    .iconfont{
                        font-size: 30px;
                    }
                }
            }
            .open-btn-panel {
                position: absolute;
                top: 308px;
                right: 0;
                width: 36px;
                height: 50px;
                border-width: 1px 0 1px 1px;
                border-color: #8cb3ec;
                border-style: solid;
                border-radius: 35px 0 0 35px;
                z-index: 1;
                cursor: pointer;

                &:after {
                    position: absolute;
                    display: block;
                    content: " ";
                    top: 18px;
                    left: 2px;
                    width: 20px;
                    height: 14px;
                    border-style: solid;
                    border-width: 7px 10px;
                    border-color: transparent rgba(20,32,102, 1) transparent transparent;
                    border-radius: 3px;
                }
            }
        }
    }

    .addOrEdit-container-modal {
        .ivu-modal {
            top: 50%;
            margin-top: -100px;
        }
    }
</style>