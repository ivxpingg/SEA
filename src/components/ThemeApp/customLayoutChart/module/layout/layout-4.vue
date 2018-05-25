<template>
    <div class="layout-4-container">
        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="(item_lv1, idx) in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <template v-if="!!item_lv1.lv2">
                    <div class="lv1-handle" v-if="isEdit"><Icon type="drag"></Icon></div>
                    <div class="sortable-panel sortable-lv2"
                         :class="{'sortable-panel-edit':isDrayNavPanelLv2, 'cursor-move': isEdit}">
                        <div class="sortable-item" v-for="item_lv2 in item_lv1.lv2" :name="item_lv2.navItemType" :class="item_lv2.className">
                            <div class="lv1-handle lv2-handle" v-if="isEdit"><Icon type="drag"></Icon></div>
                            <div class="theme-sortable-panel">
                                <div class="theme-item">
                                    <vEcharts :id="item_lv2.navItemType" :isEdit="isEdit" :itemInfo="item_lv2"  @sub_layoutData="sub_layoutData"></vEcharts>
                                </div>
                            </div>
                            <!--<vEcharts :id="item_lv1.navItemType"  :isEdit="isEdit" :itemInfo="item_lv2" @sub_layoutData="sub_layoutData"></vEcharts>-->
                        </div>
                    </div>
                </template>
                <template v-else>
                    <vEcharts :id="item_lv1.navItemType"></vEcharts>
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
        name: "layout-4",
        data() {
            return {
                isDrayNavPanelLv1: false,
                isDrayNavPanelLv2: false,
                sortable_lv1: null,
                sortable_lv2_0: null,
                sortable_lv2_1: null,

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
                    return [];
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
            if (this.isEdit) { this.initSortable(); }
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
                        name: 'lv1'
                    },
                    animation: 150,
                    forceFallback: true,
                    scroll: false,
                    onStart(e) {
                        that.isDrayNavPanelLv1 = true;
                    },
                    onEnd() {
                        that.isDrayNavPanelLv1 = false;
                    },
                    onMove() { },
                    onFilter(){}
                });


                this.sortable_lv2_0 = Sortable.create(this.$el.querySelectorAll('.sortable-lv2')[0], {
                    group: {
                        name: 'lv2-0'
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

                this.sortable_lv2_1 = Sortable.create(this.$el.querySelectorAll('.sortable-lv2')[1], {
                    group: {
                        name: 'lv2-1'
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

                    if (!!val1.lv2) {
                        data[idx1].lv2 = [];

                        val1.lv2.forEach(function(val2) {
                            dom = that.$el.querySelector('.' + val2.className);
                            idx2 = Com.dom.getNodeIdx(dom);

                            data[idx1].lv2[idx2] = {};
                            for (let k2 in val2) {
                                data[idx1].lv2[idx2][k2] = val2[k2];
                            }

                        });
                    }
                    else {

                    }
                });

                return data;
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
    .layout-4-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {
            .sortable-item {
                position: relative;
            }

            &.sortable-lv1 {
                height: 100%;
                padding: 15px 0px;
                > .sortable-item {
                    height: 50%;
                    border-style: solid;
                    border-color: transparent;
                    border-width: 15px 13px;
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
                > .sortable-item {
                    height: 100%;
                    float: left;
                    border-style: solid;
                    border-color: transparent;
                    border-width: 0 13px;

                    &.lv2-item-idx-1 { width: 33.3333%; }
                    &.lv2-item-idx-2 { width: 33.3333%; }
                    &.lv2-item-idx-3 { width: 33.3333%; }

                    &.lv3-item-idx-1 { width: 50%; }
                    &.lv3-item-idx-2 { width: 50%; }
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
                    top: 10px;
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

                .lv2-handle {
                    top: 20px;
                    right: 40px;
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