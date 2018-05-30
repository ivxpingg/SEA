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
                <Button type="success" icon="close-round"  size="large" @click="onClickThemeDel">删除</Button>
            </div>

            <Form class="form" ref="formValidate" :model="formData" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formData.name" title="" placeholder="请输入主题名称" />
                </FormItem>

                <FormItem label="系统名称">
                    <Select v-model="formData.sysNo" placeholder="系统名称">
                        <Option v-for="item in dict_sysList" :value="item.value" :key="item.value">{{item.label}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="数据库">
                    <Select v-model="DataBaseType" placeholder="请选择图形">
                        <Option value="oracle.jdbc.driver.OracleDriver">Oracle</Option>
                        <Option value="com.mysql.jdbc.Driver">MySQL</Option>
                    </Select>
                </FormItem>

                <FormItem label="数据库驱动">
                    <Input v-model="formData.driver" title="" disabled placeholder="数据库驱动" />
                </FormItem>

                <FormItem label="url">
                    <Input v-model="formData.url" title="" placeholder="url" />
                </FormItem>

                <FormItem label="用户名">
                    <Input v-model="formData.userName" title="" placeholder="用户名" />
                </FormItem>

                <FormItem label="密码">
                    <Input v-model="formData.password" type="password" title="" placeholder="密码" />
                </FormItem>

                <FormItem label="图形">
                    <Select v-model="formData.picType" placeholder="请选择图形">
                        <Option v-for="item in dict_chart" :value="item.value" :key="item.value">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="SQL">
                    <Input v-model="formData.queryStatement" type="textarea" :rows="4" placeholder="请输入SQL，多个SQL请用';'隔开" />
                </FormItem>

                <!--雷达图-->

                <!--<FormItem label="参数SQL">-->
                    <!--<Input v-model="formData.sqlParam" type="textarea" :rows="4" placeholder="请输入参数SQL，多个SQL请用';'隔开" />-->
                <!--</FormItem>-->
                <!--<FormItem label="图表参数" v-if="formData.picType === 'radar'">-->
                    <!--<Input v-model="formData.echartParam" type="textarea" :rows="4" placeholder="" />-->
                <!--</FormItem>-->

                <FormItem label="配置">
                    <Input v-model="formData.configure" type="textarea" :rows="4" :placeholder="defaultConfig" />
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
                status: 'add',
                formData: {
                    id: '',
                    name: '',
                    sysNo: '',  // 系统名称
                    picType: 'radar',
                    driver: '',
                    url: '',
                    userName: '',
                    password: '',
                    queryStatement: '',
                    echartParam: '',
                    configure: ''
                },
                themeDataList: [],

                // 数据库
                DataBaseType: 'oracle.jdbc.driver.OracleDriver',
                DataBaseURL: {
                    'oracle.jdbc.driver.OracleDriver': 'jdbc:oracle:thin:@ip:1521:数据库实例',
                    'com.mysql.jdbc.Driver': 'jdbc:mysql://ip:3306/数据库名称?useUnicode=true&characterEncoding=utf-8'
                },

                // 配置默认显示内容
                defaultConfigure: {
                    line: {
                        _line: {}
                    },
                    bar: {
                        _bar: {}
                    },
                    pie: {
                        series: [{
                            name: '饼图分类名称'
                        }],
                        _pie: {}
                    },
                    radar: {
                        radar: {
                            indicator: [
                                { name: '平均预热开机时长', max: 100 },
                                { name: '使用时长', max: 100 },
                                { name: '共享时长', max: 100 },
                                { name: '使用率', max: 100 },
                                { name: '维护次数', max: 100 },
                                { name: '待测项目', max: 100 }
                            ]
                        },
                        _radar: {}
                    },
                    wordCloud: {
                        _wordCloud: {}
                    }
                },

                // 配置对象内容 (暂时没用上)
                configure: {
                    radar: {
                        indicator: []
                    },
                    _bar: {},              // 对应需要图表需要的动态参数
                    _line: {},             // 对应需要图表需要的动态参数
                    _pie: {},              // 对应需要图表需要的动态参数
                    _radar: {},            // 对应需要图表需要的动态参数
                    _wordCloud: {}         // 对应需要图表需要的动态参数
                },

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
                },
                                   {
                    name: '字符云',
                    value: 'wordCloud'
                }],

                // 后台字典
                // 子系统列表
                dict_sysList: []
            };
        },
        computed: {
            defaultConfig() {
                return JSON.stringify(this.defaultConfigure[this.formData.picType]);
            }
        },
        watch: {
            'formData.picType': function(val, oldVal) {
                // 如果图形变更
                switch (val) {
                    case 'bar':
                        break;
                    case 'line':
                        break;
                    case 'pie':
                        break;
                    case 'radar':
                        break;
                    case 'scatter':
                        break;
                    case 'wordCloud':
                        break;
                }
            },
            DataBaseType: {
                immediate: true,
                handler: function (val) {
                    this.formData.driver = val;
                    this.formData.url = this.DataBaseURL[val];
                }
            }
        },
        mounted() {
            this.getDictData();
            this.getThemeDataList();
        },
        methods: {
            // 获取字典数据
            getDictData() {
                var that = this;
                // 获取系统列表
                this.$http({
                    method: "get",
                    url: '/ocean/sys/dict/listData',
                    params: {
                        type: 'sysNo'
                    }
                }).then(function (response) {
                    if (response.status === 1) {
                        that.dict_sysList = response.result;
                    }
                    else {
                        console.dir(response.errMsg);
                    }
                }).catch(function (err) {
                    console.dir(err);
                });
            },
            // ajax获取主题指标
            getThemeDataList() {
                var that = this;
                this.$http({
                    url: '/ocean/theme/microanalysis/list',
                    method: 'get'
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

                this.status = 'update';
                this.getThemeById(item.id);
            },

            getThemeById(id) {
                var that = this;
                if (id !== '') {
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
                            that.formData.sysNo = response.result.sysNo || '';
                            that.formData.picType = response.result.picType || '';
                            that.formData.driver = response.result.driver || '';
                            that.formData.url = response.result.url || '';
                            that.formData.userName = response.result.userName || '';
                            that.formData.password = response.result.password || '';
                            that.formData.queryStatement = response.result.queryStatement || '';
                            that.formData.echartParam = response.result.echartParam || '';
                            that.formData.configure = response.result.configure || '';
                        }
                    }).catch(function (e) {

                    });
                }
            },

            onClickThemeDel() {
                var that = this;

                if (this.formData.id === '') {
                    this.$Modal.warning({
                        content: '请选择要删除的微分析'
                    });
                }
                else {
                    this.$Modal.confirm({
                        title: '提示',
                        content: '确定要删除<' + that.formData.name + '>微分析？',
                        onOk() {

                            that.$http({
                                url: '/ocean/theme/microanalysis/delete',
                                method: 'get',
                                params: {
                                    id: that.formData.id
                                }
                            }).then(function(response) {
                                if(response.status === 1) {
                                    that.formData.id = '';
                                    that.$Message.success({
                                        content: '删除成功！'
                                    });
                                    that.getThemeDataList();
                                }
                                else {
                                    that.$Message.error({
                                        content: '删除失败！'
                                    });
                                }

                            }).catch(function (e) {
                                that.$Message.error({
                                    content: '删除失败！'
                                });
                            });
                        }
                    });
                }
            },

            // 添加主题，清空数据
            onClickThemeAdd() {
                this.status = 'add';
                this.formData.id = '';
                this.formData.name = '';
                this.formData.picType = '';

                var doms = this.$refs.themeDataList_ul.querySelectorAll('.active');

                for(let i = 0; i < doms.length; i++) {
                    doms[i].className = doms[i].className.replace(' active', '');
                }
            },

            // 保存主题, 更新或者新增
            onClickThemeSave() {
                var that = this;
                if (this.status === 'add') {

                    this.$http({
                        url: '/ocean/theme/microanalysis/add',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        method: 'post',
                        data: JSON.stringify(this.formData)
                    }).then(function (response) {
                        if (response.status === 1) {
                            that.$Modal.success({
                                content: '添加成功！'
                            });

                            that.getThemeDataList();
                        }
                        else {
                            that.$Modal.error({
                                content: '添加失败！'
                            });
                        }

                    }).catch(function (e) {
                        debugger
                        that.$Modal.error({
                            content: '添加失败！'
                        });
                    });
                }

                else if(this.status === 'update') {
                    this.$http({
                        url: '/ocean/theme/microanalysis/update',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        method: 'post',
                        data: JSON.stringify(this.formData)
                    }).then(function (response) {
                        if (response.status === 1) {
                            that.$Modal.success({
                                content: '更新成功！'
                            });
                            that.getThemeDataList();
                            that.getThemeById(that.formData.id);
                        }
                        else {
                            that.$Modal.error({
                                content: '更新失败！'
                            });
                        }


                    }).catch(function (e) {

                    });
                }
            }
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