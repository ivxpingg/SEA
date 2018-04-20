<template>
    <div class="appHome-container">
        <vHeader></vHeader>
        <div class="subsystem-panel">
            <vNavLayout1></vNavLayout1>
        </div>
    </div>
</template>

<script>
    import Sortable from 'sortablejs';
    import vNavLayout1 from './homeLayout/navLayout-1';
    import vHeader from './header/header';
    export default {
        name: "appHome",
        data() {
            return {};
        },
        components: {vHeader, vNavLayout1},
        mounted() {

        },
        methods: {}
    }
</script>
<style></style>
<style lang="scss" scoped>
    .appHome-container {
        height: 100%;

        background: #070714 url('./images/home-bg.png') no-repeat top center;

        .subsystem-panel {
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1340px;
            height: auto;
        }
    }
</style>