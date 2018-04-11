<template>
    <div class="appHome-container">
        <div class="subsystem-panel">
            <vLayout1></vLayout1>
        </div>
    </div>
</template>

<script>
    import Sortable from 'sortablejs';
    import vHeader from '../Layout/header/header';
    import vLayout1 from './subsystemPanel/layout-1';
    export default {
        name: "appHome",
        data() {
            return {};
        },
        components: {vHeader, vLayout1},
        mounted() {

        },
        methods: {}
    }
</script>
<style></style>
<style lang="scss" scoped>
    .appHome-container {
        height: 100%;


    }
</style>