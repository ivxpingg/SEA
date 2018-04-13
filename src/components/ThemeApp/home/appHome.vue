<template>
    <div class="appHome-container">
        <div class="subsystem-panel">
            <vNavLayout1></vNavLayout1>
        </div>
    </div>
</template>

<script>
    import Sortable from 'sortablejs';
    import vHeader from '../Layout/header/header';
    import vLayout1 from './subsystemPanel/layout-1';
    import vNavLayout1 from './homeLayout/navLayout-1';
    export default {
        name: "appHome",
        data() {
            return {};
        },
        components: {vHeader, vLayout1, vNavLayout1},
        mounted() {

        },
        methods: {}
    }
</script>
<style></style>
<style lang="scss" scoped>
    .appHome-container {
        height: 100%;

        .subsystem-panel {
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1366px;
            height: auto;
        }
    }
</style>