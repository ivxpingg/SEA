<template>
    <div class="layout-1-container">

        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">

            <div class="sortable-item" v-for="item_lv1 in m_layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <template v-if="!!item_lv1.lv2">

                    <div class="sortable-panel sortable-lv2" :class="{'sortable-panel-edit':isDrayNavPanelLv2, 'cursor-move': isEdit}" ref="sortable-panel-lv2">

                        <div class="sortable-item" v-for="item_lv2 in item_lv1.lv2" :name="item_lv2.navItemType" :class="item_lv2.className">
                            <div class="lv1-handle" v-if="isEdit"><Icon type="drag"></Icon></div>
                            <div class="theme-sortable-panel">
                                <div class="theme-item">
                                    <vEcharts :id="item_lv2.navItemType" :isEdit="isEdit" :itemInfo="item_lv2" :key="item_lv2.navItemType" @sub_chartType="sub_chartType" @sub_layoutData="sub_layoutData"></vEcharts>
                                </div>
                            </div>
                        </div>

                    </div>
                </template>
                <template v-else>
                    <div class="lv1-handle"  v-if="isEdit"><Icon type="drag"></Icon></div>
                    <div class="theme-sortable-panel">
                        <div class="theme-item">
                            <vEcharts :id="item_lv1.navItemType" :isEdit="isEdit" :itemInfo="item_lv1" :key="item_lv1.navItemType" @sub_chartType="sub_chartType" @sub_layoutData="sub_layoutData"></vEcharts>
                        </div>
                    </div>
                </template>
            </div>

        </div>


    </div>
</template>

<script>
    import vEcharts from './module/echarts';
    import Sortable from 'sortablejs';
    import Com from '../../../../../libs/com';
    import Utils from '../../../../../libs/utils';
    export default {
        name: "layout-1",
        data() {
            return {
                isDrayNavPanelLv1: false,
                isDrayNavPanelLv2: false,

                sortable_lv1: null,
                sortable_lv2: null,

                m_layoutData: []
            };
        },
        components: {vEcharts},
        props: {
            isEdit: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            layoutData: {
                type: Array,
                default() {
                    return [{
                        className: 'lv1-item-idx-1',
                        navItemType: ''
                    }, {
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        lv2: [{
                            className: 'lv2-item-idx-1',
                            navItemType: ''
                        },{
                            className: 'lv2-item-idx-2',
                            navItemType: ''
                        }]
                    }]
                }
            }
        },
        created() {
            this.set_m_layoutData();
        },
        watch: {
            isEdit(val, oldVal) {
                if (val) {
                    this.initSortable();
                }
                else {
                    this.sortable_lv1.destroy();
                    this.sortable_lv2.destroy();
                }
            },

            layoutData:{
                deep: true,
                handler(val, oldVal) {
                    this.set_m_layoutData();
                }
            }
        },
        mounted() {
            if (this.isEdit) {this.initSortable();}
        },
        methods: {
            set_m_layoutData() {

                var that = this;
                that.layoutData.forEach(function(val1, idx1){
                   that.$set(that.m_layoutData, idx1, val1);
                });

                if (this.sortable_lv1) {
                    this.sortable_lv1.destroy();
                }
                if (this.sortable_lv2) {
                    this.sortable_lv2.destroy();
                }

                setTimeout(function() {
                    that.initSortable();
                },0)
            },
            initSortable() {
                var that = this;

                this.sortable_lv1 = Sortable.create(this.$refs['sortable-panel-lv1'], {
                    group: {
                        name: 'lv1',
                        pull: true
                    },
                    handle: '.lv1-handle',
                    animation: 150,
                    forceFallback: true,
                    fallbackClass: 'ghostClass',
                    // scroll: false,
                    onStart(e) {
                        that.isDrayNavPanelLv1 = true;
                    },
                    onEnd() {
                        that.isDrayNavPanelLv1 = false;
                    },
                    onMove() { },
                    onFilter(){}
                });

                this.sortable_lv2 = Sortable.create(this.$el.querySelector('.sortable-lv2'), {
                    group: {
                        name: 'lv2'
                    },
                    animation: 150,
                    forceFallback: true,
                    scroll: false,
                    onStart(e) {
                        that.isDrayNavPanelLv2 = true;
                    },
                    onEnd() {
                        that.isDrayNavPanelLv2 = false;
                    },
                    onMove() { },
                    onFilter(){}
                });

                var themeSortableDom = this.$el.querySelectorAll('.theme-sortable-panel');
                for(var i = 0; i < themeSortableDom.length; i++) {
                    Sortable.create(themeSortableDom[i], {
                        group: {
                            name: 'theme_' + i,
                            put: ['theme']
                        },
                        animation: 150,
                        forceFallback: true,
                        onEnd() {
                            // console.log('onEnd');
                        }
                    });
                }
            },

            save() {

                var that = this;
                var data = [];
                var dom, idx1, idx2;


                this.m_layoutData.forEach(function(val1) {
                   dom = that.$el.querySelector('.' + val1.className);
                   idx1 = Com.dom.getNodeIdx(dom);

                   data[idx1] = {};
                   for (let k1 in val1) {
                       if (k1 !== 'lv2') {
                           data[idx1][k1] = val1[k1];
                       }
                   }

                   // data[idx1] = {
                   //     chartType: val1.chartType || '',
                   //     className: val1.className,
                   //     navItemType: val1.navItemType,
                   //     chartOption: val1.chartOption || {},
                   //     externalOption: val1.externalOption || {}
                   // };

                   if (!!val1.lv2) {
                       data[idx1].lv2 = [];

                       val1.lv2.forEach(function(val2) {
                           dom = that.$el.querySelector('.' + val2.className);
                           idx2 = Com.dom.getNodeIdx(dom);

                           data[idx1].lv2[idx2] = {};
                           for (let k2 in val2) {
                               data[idx1].lv2[idx2][k2] = val2[k2];
                           }

                           // data[idx1].lv2[idx2] = {
                           //     chartType: val2.chartType || '',
                           //     className: val2.className,
                           //     navItemType: val2.navItemType,
                           //     chartOption: val2.chartOption || {},
                           //     externalOption: val2.externalOption || {}
                           // };
                       });
                   }
                   else {

                   }
                });

                return data;
            },


            sub_chartType(type, itemInfo) {

                for(let i = 0; i < this.m_layoutData.length; i++) {

                    if (this.m_layoutData[i].className === itemInfo.className) {
                        this.m_layoutData[i].chartType = type;
                        return;
                    }

                    if(this.m_layoutData[i].lv2 && this.m_layoutData[i].lv2.length > 0) {

                        for (let j = 0; j < this.m_layoutData[i].lv2.length; j++) {
                            if (this.m_layoutData[i].lv2[j].className === itemInfo.className) {
                                this.m_layoutData[i].lv2[j].chartType = type;
                                return;
                            }
                        }
                    }

                }

            },

            /**
             * 修改布局数据
             * @param key
             * @param data
             * @param itemInfo
             */
            sub_layoutData(key, data, itemInfo) {
                for(let i = 0; i < this.m_layoutData.length; i++) {

                    if (this.m_layoutData[i].className === itemInfo.className) {

                        this.m_layoutData[i][key] = Utils.merge(this.m_layoutData[i][key], data);
                        return;
                    }

                    if(this.m_layoutData[i].lv2 && this.m_layoutData[i].lv2.length > 0) {

                        for (let j = 0; j < this.m_layoutData[i].lv2.length; j++) {
                            if (this.m_layoutData[i].lv2[j].className === itemInfo.className) {

                                this.m_layoutData[i].lv2[j][key] = Utils.merge(this.m_layoutData[i].lv2[j][key], data);
                                return;
                            }
                        }
                    }

                }
            }
        }
    }
</script>

<style lang="scss">
    .layout-1-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {

            .sortable-item {
                position: relative;
            }

            &.sortable-lv1 {
                padding: 0 13px;
                height: 100%;
                > .sortable-item {
                    position: relative;
                    height: 100%;
                    float: left;
                    border-style: solid;
                    border-color: transparent;
                    border-width: 30px 13px;
                    &.lv1-item-idx-1{
                        width: 55%;
                    }
                    &.lv1-item-idx-2{
                        width: 45%;
                    }
                }

                &.sortable-panel-edit {
                    > .sortable-item{
                        &:after {
                            position: absolute;
                            content: " ";
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            z-index: 1000;
                            cursor: move;
                        }
                    }
                }
            }

            &.sortable-lv2 {
                height: 100%;
                > .sortable-item{
                    height: 50%;
                    &.lv2-item-idx-1{}
                    &.lv2-item-idx-2{}

                    &:first-child {
                        border-width: 0 0 15px 0;
                        border-style: solid;
                        border-color: transparent;
                    }

                    &:last-child {
                        border-width: 15px 0 0 0;
                        border-style: solid;
                        border-color: transparent;
                    }
                }

                &.sortable-panel-edit {
                    > .sortable-item{
                        &:after {
                            position: absolute;
                            content: " ";
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            z-index: 1000;
                            cursor: move;
                        }
                    }
                }
            }

            &.cursor-move {

                .lv1-handle{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 20px;
                    height: 20px;
                    /*background-color: #FFF;*/
                    z-index: 10;
                    cursor: move;

                    > i {
                        font-size: 20px;
                        font-weight: 700;
                    }
                }
            }
        }

        .theme-sortable-panel {
            position: relative;
            height: 100%;
            /*overflow: hidden;*/
            .theme-item {
                height: 100%;

                .bg-img {
                    display: none;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 100% auto;
                }

                &.theme-model {
                    position: relative;

                    .item-title {
                        position: absolute;
                        top: 24px;
                        left: 26px;
                        z-index: 1;
                    }

                    &.line .bg-img {
                        display: block;
                        background-image: url("../images/line.png");

                    }
                    &.bar .bg-img {
                        display: block;
                        background-image: url("../images/bar.png");

                    }
                    &.pie .bg-img {
                        display: block;
                        background-image: url("../images/pie.png");

                    }
                }
            }
        }


        .ghostClass {
            .echart-image {
                display: block;
            }
        }
    }
</style>