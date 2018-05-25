<template>
    <div class="layout-3-container">
        <div class="sortable-panel sortable-lv1" :class="{'cursor-move': isEdit}" ref="sortable-panel-lv1">
            <div class="sortable-item" v-for="item_lv1 in layoutData" :name="item_lv1.navItemType" :class="item_lv1.className">
                <vEcharts :id="item_lv1.navItemType" :isEdit="isEdit" :itemInfo="item_lv1"></vEcharts>
            </div>
        </div>
    </div>
</template>

<script>
    import vEcharts from './module/echarts';
    import Sortable from 'sortablejs';
    export default {
        name: "layout-3",
        data() {
            return {
                isDrayNavPanelLv1: false,
                sortable_lv1: null,
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
    .layout-3-container {
        box-sizing: border-box;
        height: 100%;
        .sortable-panel {
            .sortable-item {}

            &.sortable-lv1 {
                height: 100%;
                padding: 15px 13px;
                .sortable-item {
                    height: 50%;
                    float: left;
                    border-style: solid;
                    border-color: transparent;
                    border-width: 15px 13px;

                    &.lv1-item-idx-1 { width: 55%; }
                    &.lv1-item-idx-2 { width: 45%; }
                    &.lv1-item-idx-3 { width: 55%; }
                    &.lv1-item-idx-4 { width: 45%; }
                }
            }
        }
    }
</style>