<template>
    <div class="layout-4-container">
        <div class="sortable-panel sortable-lv1" :class="{'sortable-panel-edit':isDrayNavPanelLv1, 'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="(item_lv1, idx) in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <template v-if="!!item_lv1.lv2">
                    <div class="sortable-panel sortable-lv2" :ref="'sortable-panel-lv' + (idx + 1)">
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
        name: "layout-4",
        data() {
            return {
                isDrayNavPanelLv1: false,
                sortable_lv1: null,
                sortable_lv2: null,
                sortable_lv3: null
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
            if (this.isEdit) {this.initSortable();}
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
            },
        }
    }
</script>

<style lang="scss" scoped>
    .layout-4-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {
            .sortable-item {}

            &.sortable-lv1 {
                height: 100%;
                padding: 15px 13px;
                > .sortable-item {
                    height: 50%;
                    border-style: solid;
                    border-color: transparent;
                    border-width: 15px 13px;
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
            }


        }
    }
</style>