<template>
    <div class="navLayout-1-container">
        <div class="nav-panel nav-panel-lv1 cursor-move" :class="{'nav-panel-edit':isDrayNavPanelLv1}" ref="nav-panel-lv1">
            <div class="nav-item" v-for="item in lv1" :name="item.navItemType" :class="item.className">
                <vNavItemParent :keyId="item.navItemType"></vNavItemParent>
            </div>
        </div>
    </div>
</template>

<script>
    import vNavItemParent from './module/navItemParent';
    import Sortable from 'sortablejs';
    export default {
        name: "navLayout-1",
        data() {
            return {
                isDrayNavPanelLv1: false,
                lv1: [
                    {
                        className: 'double-w',
                        navItemType: '1'
                    },
                    {
                        className: '',
                        navItemType: '2'
                    },
                    {
                        className: '',
                        navItemType: '3'
                    },
                    {
                        className: '',
                        navItemType: '4'
                    },
                    {
                        className: '',
                        navItemType: '5'
                    }
                ]
            };
        },
        components: {vNavItemParent},
        mounted() {
            this.initSortable();
        },
        methods: {
            initSortable() {
                var that = this;

                var navSort_lv1 = Sortable.create(this.$refs['nav-panel-lv1'], {
                    group: {
                        name: 'lv1',
                    },
                    animation: 150,
                    forceFallback: true,
                    onStart(e) {
                        that.isDrayNavPanelLv1 = true;
                    },
                    onEnd(e) {
                        that.isDrayNavPanelLv1 = false;
                    }
                });
            },
            insertAfter(newNode, existingNode) {
                var parentNode = existingNode.parentNode;

                if(parentNode == undefined) {
                    debugger
                }

                if (existingNode.nextSibling != null) {
                    parentNode.insertBefore(newNode, existingNode.nextSibling);
                }
                else {
                    parentNode.appendChild(newNode);
                }
            }
        }
    }
</script>
<style lang="scss" src="./style/navLyout.scss"></style>
<style lang="scss" scoped>
    /*@import './style/navLyout';*/

    $lv1_padding_top: 7px;
    $lv1_padding_left: 10px;
    $lv1_padding_right: 10px;
    $lv1_padding_bottom: 7px;

    $lv1_nav_item_height: 335px;
    $lv2_nav_item_height: $lv1_nav_item_height / 2;

    .navLayout-1-container {
        height: 710px;
        padding: 5px 0;
        overflow: hidden;
    }

    .nav-panel {
        box-sizing: border-box;
        .nav-item {
            position: relative;
            color: #FFF;
            font-size: 26px;
            text-align: center;
            line-height: 250px;
            overflow: hidden;
        }

        &.nav-panel-edit {
            > .nav-item{
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

        &.nav-panel-lv1 {
            > .nav-item {
                float: left;
                width: 33.33333%;
                padding-top: $lv1_padding_top;
                padding-left: $lv1_padding_left;
                padding-right: $lv1_padding_right;
                padding-bottom: $lv1_padding_bottom;
                height: $lv1_nav_item_height + $lv1_padding_top + $lv1_padding_bottom;

                &.double-w {
                    width: 66.66666%;
                }
            }
        }

    }

    .cursor-move {
        cursor: move;
    }
</style>