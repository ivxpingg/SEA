<template>
    <div class="layoutChart-container" ref="layoutChart">
        <vHeader class="header"></vHeader>
        <div class="router-view" ref="routerView">
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
            this.initStyle();
        },
        methods: {
            initStyle(){
                var that = this;
                var height = that.$refs.layoutChart.clientHeight;

                if (height < 768) { height = 768; }

                window.onresize = function () {

                    height = that.$refs.layoutChart.clientHeight;
                    if (height < 768) { height = 768; }
                    that.$refs.routerView.style.height = height + 'px';
                }

                that.$refs.routerView.style.height = height + 'px';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layoutChart-container {
        position: relative;
        height: 100%;
        min-width: 1366px;
        .header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            min-width: 1366px;
        }

        .router-view {
            padding-top: 91px;
            background-color: #0c0d4b;
        }
    }
</style>