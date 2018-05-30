<template>
    <div class="header-container">
        <div class="header-inner">
            <div class="title">海洋产业定制分析</div>
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/appHome">导航界面</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    }
</script>

<style lang="scss" scoped>
    .header-container {
        position: relative;
        height: 91px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 79px, transparent 79px, transparent 91px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &:after {
            position: absolute;
            display: block;
            bottom: 0px;
            left: 0;
            right: 0;
            content: " ";
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            z-index: 1;
        }

        .header-inner {
            position: relative;

            .title {
                margin-left: 60px;
                color: #FFF;
                letter-spacing: 6px;
                font-size: 32px;
                font-weight: 500;
                line-height: 79px;
                text-align: left;
            }

            .m-btn {
                position: absolute;
                padding: 0 50px;
                top: 25px;
                right: 110px;
                height: 30px;
                font-size: 14px;
                line-height: 30px;
                color: rgba(255,255,255, 0.8);
                letter-spacing: 4px;
                /*transition: background-color .2s linear;*/
                background: linear-gradient(to left, transparent 0% , rgba(255,255,255, 0.33) 50% , transparent 100%);
                &:hover {
                    color: rgba(255,255,255, 1);
                    background: linear-gradient(to left, transparent 0% , rgba(255,255,255, 0.44) 50% , transparent 100%);
                }
            }
        }
    }
</style>