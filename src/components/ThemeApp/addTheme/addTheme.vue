<template>
    <div class="addTheme-container">

        <div class="left-panel">
            <ul ref="themeDataList_ul">
                <li v-for="item in themeDataList" @click="onClickTheme($event ,item)">{{item.name}}</li>
            </ul>
        </div>

        <div class="right-panel">

            <div class="btn-panel">
                <Button type="info" icon="plus-round" size="large" @click="onClickThemeAdd">添加</Button>
                <Button type="success" icon="android-checkmark-circle"  size="large" @click="onClickThemeSave">保存</Button>
            </div>

            <Form class="form" ref="formValidate" :model="formData" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formData.name" title="" placeholder="请输入主题名称" />
                </FormItem>

                <FormItem label="图形">
                    <Select v-model="formData.picType" placeholder="请选择图形">
                        <Option v-for="item in dict_chart" :value="item.value" :key="item.value">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="SQL">
                    <Input v-model="formData.sql" type="textarea" :rows="4" placeholder="请输入SQL" />
                </FormItem>


            </Form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "addTheme",
        data() {
            return {
                formData: {
                    id: '',
                    name: '',
                    picType: '',
                    sql: ''
                },
                themeDataList: [],

                // 字典
                dict_chart: [{
                    name: '柱形图',
                    value: 'bar'
                },{
                    name: '折线图',
                    value: 'line'
                },{
                    name: '饼图',
                    value: 'pie'
                },{
                    name: '雷达图',
                    value: 'radar'
                },{
                    name: '气泡图',
                    value: 'scatter'
                }]
            };
        },
        watch: {
            formData: {
                deep: true,
                handler(val, oldVal) {
                    // 如果图形变更
                    if (val.picType !== oldVal.picType) {
                        switch(val.picType) {
                            case 'bar': break;
                            case 'line': break;
                            case 'pie': break;
                            case 'radar': break;
                            case 'scatter': break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.getThemeDataList();
        },

        methods: {
            // ajax获取主题指标
            getThemeDataList() {
                var that = this;
                this.$http({
                    url: '/ocean/theme/microanalysis/list',
                    methods: 'get'
                }).then(function (response) {
                    if (response.status === 1) {
                        that.themeDataList = response.result;
                    }

                }).catch(function (e) {

                });
            },

            onClickTheme(e, item) {
                var doms = this.$refs.themeDataList_ul.querySelectorAll('.active');

                for(let i = 0; i < doms.length; i++) {
                    doms[i].className = doms[i].className.replace(' active', '');
                }

                e.currentTarget.className += ' active';

                this.getThemeById(item.id);

            },

            getThemeById(id) {
                var that = this;
                if (this.id !== '') {
                    this.$http({
                        url: '/ocean/theme/microanalysis/detail',//query
                        method: 'get',
                        params: {
                            id: id
                        }
                    }).then(function(response) {
                        if(response.status === 1) {
                            console.dir(response.result);
                            that.formData.id = response.result.id;
                            that.formData.name = response.result.name || '';
                            that.formData.picType = response.result.picType || '';
                        }
                    }).catch(function (e) {

                    });
                }
            },

            // 添加主题，清空数据
            onClickThemeAdd() {
                this.formData.id = '';
                this.formData.name = '';
                this.formData.picType = '';

                var doms = this.$refs.themeDataList_ul.querySelectorAll('.active');

                for(let i = 0; i < doms.length; i++) {
                    doms[i].className = doms[i].className.replace(' active', '');
                }
            },

            // 保存主题, 更新或者新增
            onClickThemeSave() {}


        }
    }
</script>

<style lang="scss" scoped>
    .addTheme-container {
        display: flex;
        height: 100%;

        .left-panel {
            padding: 30px 25px;
            width: 280px;
            border-right: 1px solid #969896;

            ul {
                list-style-type: none;

                li{
                    margin-bottom: 5px;
                    padding: 0 15px;
                    font-size: 14px;
                    line-height: 30px;
                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        background-color: #dcdddd;
                    }

                    &.active {
                        background-color: #dcdddd;
                    }
                }
            }
        }

        .right-panel {
            flex: 1;

            .btn-panel {
                line-height: 60px;
                border-bottom: 1px solid #969896;

                .ivu-btn {
                    margin-left: 40px;
                }
            }

            .form {
                margin: 15px 60px 15px 0;

            }
        }
    }
</style>