<template>
    <div class="layoutParentBox-container">
        <vLayout1 v-if="keyId === '1'" :isEdit="isEdit" :layoutData="layoutData" @sub_callBack_data="sub_callBack_data" ref="vLayout1"></vLayout1>
        <vLayout2 v-if="keyId === '2'" :isEdit="isEdit" :layoutData="layoutData" @sub_callBack_data="sub_callBack_data" ref="vLayout2"></vLayout2>
        <vLayout3 v-if="keyId === '3'" :isEdit="isEdit" :layoutData="layoutData" @sub_callBack_data="sub_callBack_data" ref="vLayout3"></vLayout3>
        <vLayout4 v-if="keyId === '4'" :isEdit="isEdit" :layoutData="layoutData" @sub_callBack_data="sub_callBack_data" ref="vLayout4"></vLayout4>
    </div>
</template>

<script>
    import vLayout1 from './layout-1';
    import vLayout2 from './layout-2';
    import vLayout3 from './layout-3';
    import vLayout4 from './layout-4';
    import Com from '../../../../../libs/com';
    export default {
        name: "layoutParentBox",
        data() {
            return {
                // 存放当前布局的数据，用于传递给子组件
                layoutData: [],

                // 默认布局数据
                defaultLayoutData: {
                    layoutData_1: [{
                        className: 'lv1-item-idx-1',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    }, {
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {},
                        lv2: [{
                            className: 'lv2-item-idx-1',
                            navItemType: '',
                            chartType: '',
                            chartOption: {},
                            externalOption: {}
                        },{
                            className: 'lv2-item-idx-2',
                            navItemType: '',
                            chartType: '',
                            chartOption: {},
                            externalOption: {}
                        }]
                    }],

                    layoutData_2: [{
                        className: 'lv1-item-idx-1',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-3',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-4',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    }],

                    layoutData_3: [{
                        className: 'lv1-item-idx-1',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-3',
                        navItemType: '',chartType: '',
                        chartOption: {},
                        externalOption: {}
                    },{
                        className: 'lv1-item-idx-4',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {}
                    }],

                    layoutData_4: [{
                        className: 'lv1-item-idx-1',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {},
                        lv2: [{
                                className: 'lv2-item-idx-1',
                                navItemType: '',
                                chartType: '',
                                chartOption: {},
                                externalOption: {}
                            },{
                                className: 'lv2-item-idx-2',
                                navItemType: '',
                                chartType: '',
                                chartOption: {},
                                externalOption: {}
                            },{
                                className: 'lv2-item-idx-3',
                                navItemType: '',
                                chartType: '',
                                chartOption: {},
                                externalOption: {}
                            }]
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        chartType: '',
                        chartOption: {},
                        externalOption: {},
                        lv2: [{
                            className: 'lv3-item-idx-1',
                            navItemType: '',
                            chartType: '',
                            chartOption: {},
                            externalOption: {}
                        },{
                            className: 'lv3-item-idx-2',
                            navItemType: '',
                            chartType: '',
                            chartOption: {},
                            externalOption: {}
                        }]
                    }]
                }
            };
        },
        components: {
            vLayout1,
            vLayout2,
            vLayout3,
            vLayout4
        },
        props: {
            // 布局类型
            keyId: {
                type: String,
                default() {
                    return '1';
                }
            },
            // 是否是编辑状态
            isEdit: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            // 父组件的布局数据
            pdata: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        watch: {
            keyId(val, oldVal) {
                if (this.pdata.length === 0) {
                    this.layoutData = this.defaultLayoutData['layoutData_' + val];
                }
                else {
                    this.layoutData = this.pdata;
                }
            },

            pdata(val, oldVal) {
                this.layoutData = this.pdata;
            }
        },
        created() {

            // 如果布局数据为空，则赋予当前布局默认的布局数据
            if (this.pdata.length === 0) {
                this.layoutData = this.defaultLayoutData['layoutData_' + this.keyId];
            }
            else {
                this.layoutData = this.pdata;
            }
        },
        mounted() {},
        methods: {
            // 更新布局信息
            setEchart(id, attributeName) {

                var ls = this.layoutData;

                for (var i = 0; i < ls.length; i++) {

                    if (ls[i].lv2 && ls[i].lv2.length > 0) {

                        for(var j = 0; j < ls[i].lv2.length; j++) {
                            if (ls[i].lv2[j].className === attributeName) {
                                ls[i].lv2[j].navItemType = id;
                                return;
                            }
                        }

                    }
                    else {
                        if (ls[i].className === attributeName) {
                            ls[i].navItemType = id;
                            return;
                        }
                    }
                }
            },

            // 返回当前布局的数据
            save() {
                return this.$refs['vLayout' + this.keyId].save();
            },

            sub_callBack_data() {}
        }
    }
</script>

<style lang="scss">
    .layoutParentBox-container {
        height: 100%;
    }
</style>