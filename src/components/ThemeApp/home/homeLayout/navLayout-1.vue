<template>
    <div class="navLayout-1-container">
        <div class="nav-panel nav-panel-lv1 cursor-move" ref="nav-panel-lv1">
            <div class="nav-item">
                <vNavItem1></vNavItem1>
            </div>
            <div class="nav-item">
                <div class="nav-panel nav-panel-edit nav-panel-lv2">
                    <div class="nav-item nav-item2"><vNavItem2></vNavItem2></div>
                    <div class="nav-item nav-item3"><vNavItem3></vNavItem3></div>
                </div>
            </div>
            <div class="nav-item">
                <div class="nav-panel nav-panel-edit nav-panel-lv2">
                    <div class="nav-item nav-item4"><vNavItem4></vNavItem4></div>
                    <div class="nav-item nav-item5"><vNavItem5></vNavItem5></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vNavItem1 from './module/navItem-1';
    import vNavItem2 from './module/navItem-2';
    import vNavItem3 from './module/navItem-3';
    import vNavItem4 from './module/navItem-4';
    import vNavItem5 from './module/navItem-5';
    import Sortable from 'sortablejs';
    export default {
        name: "navLayout-1",
        data() {
            return {};
        },
        components: {vNavItem1, vNavItem2, vNavItem3, vNavItem4, vNavItem5},
        mounted() {

            this.initSortable();
        },
        methods: {
            initSortable() {
                var that = this;

                var dom_to,
                    dom_from,
                    dom_dragged,
                    dom_replaced,
                    dom_replaced_clone,
                    oldIndex;

                var navSort_lv1 = Sortable.create(this.$refs['nav-panel-lv1'], {
                    group: {
                        name: 'lv1',
                    },
                    animation: 150,
                    forceFallback: true,
                    onStart(e) {
                    },
                    onEnd(e) {}
                });

                var dom_navPanelLv2 = document.querySelectorAll('.nav-panel-lv2');
                for (var i = 0; i < dom_navPanelLv2.length; i++) {
                    Sortable.create(dom_navPanelLv2[i], {
                        group: {
                            name: 'lv2-' + i,
                            pull: true,
                            put: ['lv2-0', 'lv2-1']
                            //function (to, from,target , e) { //['lv2-0', 'lv2-1']


                                // if (to.el === from.el) {
                                //     return true;
                                // }
                                // else {
                                //
                                //     if (this.preReplaced || this.preReplaced == e.toElement) {
                                //         console.log(2);
                                //          return false;
                                //     }
                                //
                                //     console.log(1);
                                //
                                //     this.preTarget = target;
                                //     this.preTargetClone = target.cloneNode(true);
                                //     this.preTargetIndex = 0;
                                //
                                //     this.preReplaced = e.toElement;
                                //     this.preReplacedClone = e.toElement.cloneNode(true);
                                //     this.preReplacedIndex = 0;
                                //
                                //     for (var i = 0; i < from.el.childNodes.length; i++) {
                                //         if (target === from.el.childNodes[i]) {
                                //             this.preTargetIndex = i;
                                //         }
                                //     }
                                //
                                //     for (var i = 0; i < to.el.childNodes.length; i++) {
                                //         if (e.toElement === to.el.childNodes[i]) {
                                //             this.preReplacedIndex = i;
                                //         }
                                //     }
                                //
                                //     target.style.display = 'none';
                                //     e.toElement.style.display = 'none';
                                //
                                //     that.insertAfter(this.preReplacedClone, from.el.childNodes[this.preTargetIndex]);
                                //     that.insertAfter(this.preTargetClone, to.el.childNodes[this.preReplacedIndex]);
                                //
                                //     return false;
                                // }

                            //}
                        },
                        // fallbackClass: true,
                        forceFallback: true,
                        animation: 150,
                        onStart(e) {
                        },
                        onEnd(e) {
                            debugger
                            if(e.to !== e.from) {
                                if (this.pre_replaced_clone) {
                                    that.insertAfter(this.pre_replaced, e.from.childNodes[this.pre_replaced_index - 1]);
                                    e.from.removeChild(this.pre_replaced_clone);
                                    //e.from.insertBefore(this.pre_replaced, e.from.childNodes[this.pre_replaced_index]);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }
                                else {}
                            }
                            else {
                                if (this.pre_replaced_clone) {
                                    debugger
                                    e.from.removeChild(this.pre_replaced_clone);
                                    //e.from.insertBefore(this.pre_replaced, e.from.childNodes[this.pre_replaced_index]);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }
                            }
                        },
                        onRemove(e) {
                            console.dir(arguments);
                            debugger

                        },
                        onMove(e, item){
                            console.log(item.target);

                            if(e.to !== e.from) {
                                if (this.pre_replaced_clone) {
                                    e.from.removeChild(this.pre_replaced_clone);
                                    this.pre_replaced.style.display = 'block';
                                    this.pre_replaced_clone = undefined;
                                }

                                this.pre_replaced = e.related;
                                this.pre_replaced_clone = e.related.cloneNode(true);
                                this.pre_replaced_clone.className += ' ggg5';

                                this.pre_replaced_index = 1;

                                this.pre_replaced.style.display = 'none';

                                console.dir(e.from.childNodes);
                                for(var i = 0; i < e.from.childNodes.length; i ++) {
                                    if (e.from.childNodes[i] === e.dragged) {

                                        this.pre_replaced_index = i;
                                    }
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
    @import './style/navLyout';
    .navLayout-1-container {
        height: 100%;
        background: $color-bg;
    }

    .nav-panel {
        box-sizing: border-box;
        .nav-item {
            color: #FFF;
            font-size: 26px;
            text-align: center;
            line-height: 250px;
            overflow: hidden;
        }

        &.nav-panel-edit {
            > .nav-item{
                position: relative;

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
                padding: 10px 10px;
                height: 500px;
            }
        }

        &.nav-panel-lv2 {
            > .nav-item {
                padding: 5px 0;
                height: 240px;

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