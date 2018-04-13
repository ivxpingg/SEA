<template>
    <div class="cll" >
        <div class="box-parent" id="box-parent">

            <div class="box-parent-itme box-parent-itme2">
                <div class="box-son">
                    <div class="box-son-itme"><div class="fill-div">2-1</div></div>
                    <div class="box-son-itme"><div class="fill-div">2-2</div></div>
                </div>
                <div class="zezao"></div>
            </div>
            <div class="box-parent-itme box-parent-itme1">
                <div class="fill-div">1</div>
            </div>
            <div class="box-parent-itme box-parent-itme3">
                <div class="box-son">
                    <div class="box-son-itme"><div class="fill-div">3-1</div></div>
                    <div class="box-son-itme"><div class="fill-div">3-2</div></div>
                </div>
                <div class="zezao"></div>
            </div>
            <div class="box-parent-itme box-parent-itme4">
                <div class="fill-div">4</div>
            </div>
            <div class="box-parent-itme box-parent-itme5">
                <div class="fill-div">5</div>
            </div>
            <div class="box-parent-itme box-parent-itme6">
                <div class="fill-div">6</div>
            </div>
            <div class="box-parent-itme box-parent-itme7">
                <div class="fill-div">7</div>
            </div>
            <div class="box-parent-itme box-parent-itme8">
                <div class="fill-div">8</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Dragula from 'dragula';
    import 'dragula/dist/dragula.min.css';
    import Sortable from 'sortablejs';
    export default {
        name: "test",
        data() {
            return {
            }
        },
        mounted() {



            var son = document.querySelectorAll('.box-son');

            for(var i = 0; i < son.length; i++) {
                Sortable.create(son[i], {
                    group: {
                        name: 'son' + i
                    },
                    animation: 150
                });
            }

            var el = document.getElementById('box-parent');
            var sortable = Sortable.create(el, {
                group: {
                    name: 'parent',

                },
                animation: 150,
                onStart: function (e) {
                    e.from.className += ' selected';
                },
                onEnd: function (e) {
                    e.from.className = e.from.className.replace(' selected', '');
                }
            });

        }
    }
</script>

<style lang="scss" scoped>
    .cll {
        .box-parent {
            height: 900px;
            width: 700px;

            .box-parent-itme {
                position: relative;
                height: 200px;
                display: inline-block;
                float: left;
                width: 200px;

                &.box-parent-itme1 {
                    width: 200px;
                }
                &.box-parent-itme2 {
                    width: 200px;
                }
                &.box-parent-itme3 {
                    width: 150px;
                }


            }

            &.selected .zezao {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                background-color: greenyellow;
                opacity: 0.4;
            }
        }

        .box-son {
            height: 100%;
            width: 100%;

            .box-son-itme {
                height: 100px;
            }
        }

        .fill-div {
            box-sizing: border-box;
            height: 100%;
            background-color: #42b983;
            border: 4px solid #2baee9;
        }
    }

</style>