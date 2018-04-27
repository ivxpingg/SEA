<template>
    <div class="layout-1-container">
        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="item_lv1 in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <template v-if="!!item_lv1.lv2">
                    <div class="sortable-panel sortable-lv2" ref="sortable-panel-lv2">
                        <div class="sortable-item" v-for="item_lv2 in item_lv1.lv2" :name="item_lv2.navItemType" :class="item_lv2.className">
                            <vEcharts :id="item_lv1.navItemType"></vEcharts>
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
            },
        }
    }
</script>

<style lang="scss" scoped>
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
    }
</style>