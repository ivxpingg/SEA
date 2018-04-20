<template>
    <div class="layoutChart-container">
        <vHeader></vHeader>
        <div class="router-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vHeader from './header/header';
    import Sortable from 'sortablejs';
    export default {
        name: "layoutChart",
        data() {
            return {};
        },
        components: {vHeader},
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .layoutChart-container {
        height: 100%;
        min-width: 1340px;
        /*background: #070714 url('./images/home-bg.png') no-repeat top center;*/
        overflow: auto;


        .router-view {
            min-height: 100%;
            max-width: 1366px;
        }
    }
</style>