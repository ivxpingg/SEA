<template>
    <div class="layout-2-container">
        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="item_lv1 in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <div class="lv1-handle"  v-if="isEdit"><Icon type="drag"></Icon></div>
                <div class="theme-sortable-panel">
                    <div class="theme-item">
                        <vEcharts :id="item_lv1.navItemType"></vEcharts>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vEcharts from './module/echarts';
    import Sortable from 'sortablejs';
    import Com from '../../../../../libs/com';
    export default {
        name: "layout-2",
        data() {
            return {
                isDrayNavPanelLv1: false,
                sortable_lv1: null,

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

                    data[idx1] = {
                        className: val1.className,
                        navItemType: val1.navItemType
                    };

                    if (!!val1.lv2) {
                        data[idx1].lv2 = [];

                        val1.lv2.forEach(function(val2) {
                            dom = that.$el.querySelector('.' + val2.className);
                            idx2 = Com.dom.getNodeIdx(dom);

                            data[idx1].lv2[idx2] = {
                                className: val2.className,
                                navItemType: val2.navItemType
                            };
                        });
                    }
                    else {

                    }
                });

                return data;
            }
        }
    }
</script>

<style lang="scss">
    .layout-2-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {
            .sortable-item {
                position: relative;
            }

            &.sortable-lv1 {
                height: 100%;
                padding: 15px 13px;
                .sortable-item {
                    width: 50%;
                    height: 50%;
                    float: left;
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
            overflow: hidden;
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