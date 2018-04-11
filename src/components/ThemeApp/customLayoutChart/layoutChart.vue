<template>
    <div class="layoutChart-container">
        <div class="left-panel">
            <div class="menu" id="dary">
                <div class="item echart-line"><span>产业现状综合分析</span></div>
                <div class="item echart-bar"><span>大型仪器使用分析</span></div>
                <div class="item echart-pie"><span>产业营销收入分析</span></div>
            </div>
        </div>
        <div class="right-panel">
            <div class="template-panel" id="template">
                <div class="box 111"><div class="item item1"><span>1</span></div></div>
                <div class="box 112"><div class="item item1"><span>2</span></div></div>
                <div class="box 113"><div class="item item1"><span>3</span></div></div>
                <div class="box 114"><div class="item item1"><span>4</span></div></div>
                <div class="box 115"><div class="item item1"><span>5</span></div></div>
                <div class="box 116"><div class="item item1"><span>6</span></div></div>
                <div class="box 117"><div class="item item1"><span>7</span></div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sortable from 'sortablejs';
    export default {
        name: "layoutChart",
        data() {
            return {};
        },
        mounted() {
            this.initMenu();
            this.rightBox();
        },
        methods: {
            initMenu() {
                var el = document.getElementById('dary');
                var sortable = Sortable.create(el, {
                    group: {
                        name: 'menu',
                        pull: 'clone',
                        put: false
                    },
                    // animation: 150,
                    sort: false,
                    // delay: 100,
                    dragClass: 'current-drag',
                    ghostClass: 'replica-drag',
                    forceFallback: true,
                    onStart: function () {
                        // console.log('start');
                    },
                    onEnd: function () {
                        // console.log('end');
                    },
                    onRemove: function () {
                        // console.dir(arguments);
                        // console.log('onRemove');
                    }

                });
            },

            rightBox(){
                var domList = document.querySelectorAll('#template .box');

                for (var i = 0; i < domList.length; i++) {
                    Sortable.create(domList[i], {
                        group: {
                            name: 'box-' + i,
                            put: ['menu']
                        },
                        onChoose: function() {
                        },
                        onAdd: function () {
                            this.el.removeChild(this.el.children[1]);
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layoutChart-container {
        display: flex;
        height: 100%;

        .left-panel{
            width: 280px;

            .menu {
                padding: 10px 15px;

                .item {
                    margin-top: 8px;
                    padding: 8px;
                    border: 1px solid #80848f;
                    cursor: move;
                    background-position-x: -1000px;
                    background-position-y: center;
                    background-repeat: no-repeat;

                    &.echart-line {
                        background-image: url('./images/line.png');
                    }
                    &.echart-bar {
                        background-image: url('./images/bar.png');

                    }
                    &.echart-pie {
                        background-image: url('./images/pie.png');
                    }

                    &.current-drag {
                        /*background: #42b983;*/
                        padding: 150px 150px;
                        opacity: 1;
                        background-size: 100% auto;
                        background-position-x: center;

                        span {
                            display: none;
                        }
                    }

                    &.replica-drag {
                        border: 1px dotted #80848f;
                    }
                }
            }
        }

        .right-panel {
            flex: 1;

            .box {
                display: inline-block;
                margin: 5px;

                border: 2px solid #42b983;
                border-radius: 5px;
                width: 300px;
                height: 300px;
                overflow: hidden;
                .item {
                    background-color: #42b983;

                    height: 100%;
                }
            }
        }
    }
</style>