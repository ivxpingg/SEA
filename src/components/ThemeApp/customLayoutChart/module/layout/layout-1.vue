<template>
    <div class="layout-1-container">
        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="(item_lv1, idx) in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className" :key="idx">
                <template v-if="!!item_lv1.lv2">
                    <div class="sortable-panel sortable-lv2" ref="sortable-panel-lv2">
                        <div class="sortable-item" v-for="(item_lv2, idx) in item_lv1.lv2" :name="item_lv2.navItemType" :class="item_lv2.className" :key="idx">
                            <div class="theme-sortable-panel">
                                <div class="theme-item">
                                    <vEcharts :id="item_lv1.navItemType"></vEcharts>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="theme-sortable-panel">
                        <div class="theme-item">
                            <vEcharts :id="item_lv1.navItemType"></vEcharts>
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
    export default {
        name: "layout-1",
        data() {
            return {
                isDrayNavPanelLv1: false,
                sortable_lv1: null,
                sortable_lv2: null
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
                    console.dir(val);
                    this.$forceUpdate();
                }
            }
        },
        mounted() {
            if (this.isEdit && this.layoutData.length > 0) {this.initSortable();}
        },
        methods: {
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

                this.sortable_lv2 = Sortable.create(this.$el.querySelector('.sortable-lv2'), {
                    group: {
                        name: 'lv2'
                    },
                    animation: 150,
                    forceFallback: true,
                    scroll: false,
                    onStart(e) {},
                    onEnd() {},
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
                            console.log('onEnd');
                        }
                    });
                }
            },
        }
    }
</script>

<style lang="scss">
    .layout-1-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {

            .sortable-item {}

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
    }
</style>