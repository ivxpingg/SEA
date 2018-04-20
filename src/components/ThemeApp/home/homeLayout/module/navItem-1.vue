<template>
    <div class="navItem-1-container">
        <div class="item-title">
            <span class="text">大型科研仪器共享服务组件</span>
        </div>
        <div class="level-panel level-panel-1"> </div>

        <div class="level-panel level-panel-2"></div>
    </div>
</template>

<script>
    export default {
        name: "navItem-1",
        data() {
            return {};
        }
    }
</script>

<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-1-container {
        position: relative;
        height: 100%;
        background-color: rgba(255,255,255,0.06);


        .level-panel {
            position: relative;
            height: 100%;

            &.level-panel-1 {
                background: rgba(255, 255, 255, 0.12) url("./images/phone-line.png") no-repeat center;
            }

            &.level-panel-1 {

            }
        }

    }
</style>