<template>
    <div class="cll" >
        <ul ref="ul1" id="items">
            <li>a1</li>
            <li>a2</li>
            <li class="fei">a3</li>
            <li>a4</li>
            <li>a5</li>
            <li>a6</li>
            <li>a7</li>
        </ul>
        <ul ref="ul2">

            <li class="fei">b3</li>
            <li>b4</li>
            <li>b5</li>
            <li>b6</li>
            <li>b7</li>
        </ul>
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
                d: 'ffgg'
            }
        },
        mounted() {
            var el = document.getElementById('items');
            var sortable = Sortable.create(el, {
                animation: 150
            });
            // Dragula([this.$refs.ul1,this.$refs.ul2], {
            //     isContainer: function (el) {
            //          // return !(el.className == 'fei');
            //         return false; // only elements in drake.containers will be taken into account
            //     },
            //     moves: function (el, source, handle, sibling) {
            //         return true; // elements are always draggable by default
            //     },
            //     accepts: function (el, target, source, sibling) {
            //         return true; // elements can be dropped in any of the `containers` by default
            //     },
            //     invalid: function (el, handle) {
            //         return false; // don't prevent any drags from initiating by default
            //     },
            //     direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
            //     copy: false,                       // elements are moved by default, not copied
            //     copySortSource: false,             // elements in copy-source containers can be reordered
            //     revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
            //     removeOnSpill: false,              // spilling will `.remove` the element, if this is true
            //     mirrorContainer: document.body,    // set the element that gets mirror elements appended
            //     ignoreInputTextSelection: true     // allows users to select input text, see details below
            // });
        }
    }
</script>

<style lang="scss" scoped>
    .cll {
        color: red;

        ul {
            display: inline-block;
            margin-left: 20px;
            width: 720px;
            background: #42b983;
            overflow: hidden;

            li {
                box-sizing: border-box;
                display: inline-block;
                margin: 20px;
                width: 200px;
                height: 200px;

                text-align: center;
                line-height: 200px;
                font-size: 40px;
                border: 2px solid #909090;
                background: antiquewhite;

                &.fei {
                    /*width: 440px;*/
                    /*height: 440px;*/
                }
            }
        }
    }

    li {
        box-sizing: border-box;
        display: inline-block;
        margin: 20px;
        width: 200px;
        height: 200px;

        text-align: center;
        line-height: 200px;
        font-size: 40px;
        border: 2px solid #909090;
        background: antiquewhite;

        &.fei {
            /*width: 440px;*/
            /*height: 440px;*/
        }
    }
</style>