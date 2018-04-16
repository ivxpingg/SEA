<template>
    <div class="header-container">
        <div class="header-inner">
            <div class="btn-panel">
                <div class="btn-layout" title="切换布局"></div>
                <div class="btn-style" title="切换风格"></div>
            </div>
            <div class="title">主题式多维界面组件</div>
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/layoutChart">海洋产业定制分析</router-link>
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
        height: 49px;
        background: url("./images/home-header-bg.png") repeat-x top;

        .header-inner {
            position: relative;
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1366px;

            .btn-panel {
                position: absolute;
                left: 70px;
                height: 49px;

                .btn-layout {
                    display: inline-block;
                    width: 45px;
                    height: 49px;
                    background: url("./images/btn-bg-layout.png") no-repeat center;
                    cursor: pointer;
                    &:hover {
                        background-size: 30px auto;
                    }
                }

                .btn-style {
                    display: inline-block;
                    width: 45px;
                    height: 49px;
                    background: url("./images/btn-bg-style.png") no-repeat center;
                    cursor: pointer;
                    &:hover {
                        background-size: 33px auto;
                    }
                }
            }

            .title {
                color: rgba(122,160,212, 0.7);
                letter-spacing: 6px;
                font-size: 24px;
                font-weight: 500;
                line-height: 49px;
                text-align: center;
            }

            .m-btn {
                position: absolute;
                padding: 0 50px;
                top: 9px;
                right: 110px;
                height: 30px;
                font-size: 13px;
                line-height: 30px;
                color: rgba(149,221,255, 0.37);
                letter-spacing: 2px;
                /*transition: background-color .2s linear;*/
                background: linear-gradient(right, transparent 0% , rgba(149,193,241, 0.11) 50% , transparent 100%);
                &:hover {
                    color: rgba(149,221,255, 0.5);
                    background: linear-gradient(right, transparent 0% , rgba(149,193,241, 0.33) 50% , transparent 100%);
                }
            }
        }

    }
</style>