<template>
    <div class="cll">
        <ul ref="ul1">
            <li>a1</li>
            <li>a2</li>
            <li>a3</li>
            <li>a4</li>
            <li>a5</li>
        </ul>
        <ul ref="ul2">
            <li>b1</li>
            <li>b2</li>
            <li>b3</li>
            <li>b4</li>
            <li>b5</li>
        </ul>
    </div>
</template>
<script>
    import Dragula from 'dragula';
    import 'dragula/dist/dragula.min.css';
    export default {
        name: "test",
        data() {
            return {
                d: 'ffgg'
            }
        },
        mounted() {
            console.log('test');
            Dragula([this.$refs.ul1, this.$refs.ul2], {
                copy: false
            });
        }
    }
</script>

<style lang="scss" scoped>
    .cll {
        color: red;
    }
</style>