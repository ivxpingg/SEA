<template>
    <div class="navLayout-1-container">
        <div class="nav-panel nav-panel-lv1" :class="{'nav-panel-edit':isDrayNavPanelLv1, 'cursor-move': editLayout}" ref="nav-panel-lv1">
            <div class="nav-item" v-for="item_lv1 in lv1" :name="item_lv1.navItemType" :class="item_lv1.className">
                <template v-if="!!item_lv1.lv2">
                    <div class="nav-panel nav-panel-lv2">
                        <div class="nav-item" v-for="item_lv2 in item_lv1.lv2" :name="item_lv2.navItemType">
                            <vNavItemParent :keyId="item_lv2.navItemType"></vNavItemParent>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <vNavItemParent :keyId="item_lv1.navItemType"></vNavItemParent>
                </template>
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
                sortable_lv1: null,
                sortable_lv2_0: null,
                sortable_lv2_1: null,
                lv1: [
                    {
                        className: '',
                        navItemType: '1'
                    },
                    {
                        className: '',
                        navItemType: '',
                        lv2: [
                            {
                                className: '',
                                navItemType: '2'
                            },
                            {
                                className: '',
                                navItemType: '3'
                            }
                        ]
                    },
                    {
                        className: '',
                        navItemType: '',
                        lv2: [
                            {
                                className: '',
                                navItemType: '4'
                            },
                            {
                                className: '',
                                navItemType: '5'
                            }
                        ]
                    }
                ]
            };
        },
        props: {
            editLayout: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        components: {vNavItemParent},
        mounted() {

            // this.initSortable();
        },
        watch: {
            editLayout(val, oldVal) {
                if (val) {
                    this.initSortable();
                }
                else {
                    this.sortable_lv1.destroy();
                    this.sortable_lv2_0.destroy();
                    this.sortable_lv2_1.destroy();
                }
            }
        },
        methods: {
            initSortable() {
                var that = this;

                this.sortable_lv1 = Sortable.create(this.$refs['nav-panel-lv1'], {
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

                var dom_navPanelLv2 = document.querySelectorAll('.nav-panel-lv2');
                for (var i = 0; i < dom_navPanelLv2.length; i++) {

                    this['sortable_lv2_' + i] = Sortable.create(dom_navPanelLv2[i], {
                        group: {
                            name: 'lv2-' + i,
                            pull: true,
                            put: ['lv2-0', 'lv2-1']
                        },
                        // fallbackClass: true,
                        forceFallback: true,
                        animation: 150,
                        onStart(e) {
                        },
                        onEnd(e) {

                            if(e.to !== e.from) {
                                if (this.pre_replaced_clone) {
                                    that.insertAfter(this.pre_replaced, e.from.childNodes[this.pre_replaced_index]);
                                    e.from.removeChild(this.pre_replaced_clone);
                                    //e.from.insertBefore(this.pre_replaced, e.from.childNodes[this.pre_replaced_index]);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }
                                else {}
                            }
                            else {
                                if (this.pre_replaced_clone) {

                                    e.from.removeChild(this.pre_replaced_clone);
                                    //e.from.insertBefore(this.pre_replaced, e.from.childNodes[this.pre_replaced_index]);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }
                            }
                        },
                        onRemove(e) {

                        },
                        onMove(e, item){


                            if(e.to !== e.from) {
                                if (this.pre_replaced_clone) {
                                    e.from.removeChild(this.pre_replaced_clone);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }

                                this.pre_replaced = e.related;
                                this.pre_replaced_clone = e.related.cloneNode(true);
                                this.pre_replaced_clone.className += ' ggg5';

                                this.pre_replaced_index = 0;

                                this.pre_replaced.style.display = 'none';

                                for(var i = 0; i < e.from.childNodes.length; i ++) {
                                    if (e.from.childNodes[i] === e.dragged) {
                                        this.pre_replaced_index = i;
                                    }
                                }

                                if (e.dragged.parentNode == e.from && this.pre_replaced_index > 0) {
                                    this.pre_replaced_index -= 1;
                                }

                                that.insertAfter(this.pre_replaced_clone, e.from.childNodes[this.pre_replaced_index]);
                                // e.from.insertBefore(this.pre_replaced_clone, e.from.childNodes[this.pre_replaced_index]);

                            }
                            else {

                                if (this.pre_replaced_clone) {
                                    e.from.removeChild(this.pre_replaced_clone);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }

                                if (item.target.className.indexOf('ggg5') > 0) { return false;}
                            }

                        }
                    });
                }
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

    $lv1_padding_top: 12px;
    $lv1_padding_left: 10px;
    $lv1_padding_right: 10px;
    $lv1_padding_bottom: 12px;

    $lv2_padding_top: 7px;
    $lv2_padding_bottom: 7px;

    $lv1_nav_item_height: 684px;
    $lv2_nav_item_height: $lv1_nav_item_height / 2;

    .navLayout-1-container {
        height: 100%;
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
            display: flex;
            > .nav-item {
                flex: 1;
                padding-top: $lv1_padding_top;
                padding-left: $lv1_padding_left;
                padding-right: $lv1_padding_right;
                padding-bottom: $lv1_padding_bottom;
                height: $lv1_nav_item_height + $lv1_padding_top + $lv1_padding_bottom;
            }
        }

        &.nav-panel-lv2 {
            > .nav-item {
                padding-top: $lv2_padding_top;
                padding-bottom: $lv2_padding_bottom;
                height: $lv2_nav_item_height;

                &:first-child {
                    padding-top: 0;
                }
                &:last-child {
                    padding-bottom: 0;
                }
            }
        }
    }

    .cursor-move {
        cursor: move;
    }
</style>