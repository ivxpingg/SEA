<template>
    <div class="showFace-container">
        <div class="left-panel"></div>
        <div class="right-panel"></div>
    </div>
</template>

<script>
    export default {
        name: "showFace",
        data() {
            return {};
        }
    }
</script>

<style lang="scss" scoped>
    .showFace-container {
        display: flex;
        height: 100%;
        .left-panel {
            width: 280px;
            padding-right: 1px solid #f1f1f1;
        }

        .right-panel {
            flex: 1;
        }
    }
</style>