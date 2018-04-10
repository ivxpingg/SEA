<template>
    <div class="header-container">
        <div class="title">主题式多维界面系统</div>
        <div class="btn-panel">
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/appHome">首页</router-link>
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/layoutChart">海洋产业定制分析</router-link>
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/test">测试</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "themeHeader",
        data() {
            return {};
        }

    }
</script>

<style lang="scss" scoped>
    .header-container {
        position: relative;
        height: 87px;
        background: #2b85e4;
        border-bottom: 1px solid #2d8cf0;
        .title {
            padding-left: 20px;
            color: #FFF;
            font-size: 26px;
            font-weight: 700;
            line-height: 87px;
        }
        .btn-panel {
            position: absolute;
            top: 26px;
            right: 102px;
            height: 35px;
            overflow: hidden;
            .m-btn {
                display: inline-block;
                margin-left: 23px;
                width: 107px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                color: #FFF;
                background-color: transparent;
                border: 1px solid #FFF;
                border-radius: 19px;
                cursor: pointer;
                transition: background-color .2s linear;

                &:hover {
                    background-color: rgba(243,153,80, 1);
                }

                &.m-active {
                    background-color: #f39950;
                }
            }
        }
    }
</style>