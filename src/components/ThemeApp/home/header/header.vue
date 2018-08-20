<template>
    <div class="header-container">
        <div class="header-inner">
            <div class="btn-panel">
                <div class="btn-b btn-layout" v-if="!isAdmin" @click="onClick_backHome" title="返回首页">
                    <Icon type="home"></Icon>
                </div>
                <div class="btn-b btn-layout" v-if="isAdmin" @click="onSwitchLayout" title="切换布局">
                    <i class="iconfont icon-ai212"></i>
                </div>
                <div class="btn-b btn-style" v-if="isAdmin" @click="onSwitchSpin" title="切换风格">
                    <i class="iconfont icon-beijingtupian"></i>
                </div>
                <div class="btn-b btn-setting" v-if="isAdmin" @click="onEditLayout" title="拖放布局">
                    <i class="iconfont icon-shezhi"></i>
                </div>
            </div>
            <div class="title">主题式多维界面组件</div>
            <router-link class="m-btn" active-class="m-active" to="/ThemeApp/layoutChart/showFace">海洋产业定制分析</router-link>
        </div>
    </div>
</template>

<script>
    import Config from '../../../../libs/appConfig/config';
    export default {
        name: "themeHeader",
        data() {
            return {
                isAdmin: false
            };
        },
        props: {
            editLayout: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            skinType: {
                type: String,
                default() {
                    return '1';
                }
            }
        },
        created() {
            this.isAdmin = this.$store.state.type === '3';
        },
        methods: {
            onSwitchLayout() {
                this.$emit('sub_onSwitchLayout');
            },
            onEditLayout() {
                this.$emit('sub_onEditLayout');
            },
            onSwitchSpin() {
                this.$emit('sub_onSwitchSpin');
            },
            onClick_backHome() {

                if (this.$store.state.type === '3') {
                    window.location.href = Config[Config.env].homeSeaBaseUrl_manage + '/OCEANAM/nav/index';
                }
                else {
                    window.location.href = Config[Config.env].homeSeaBaseUrl_person + '/OCEAN/login_default';
                }

            }
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
                .btn-b {
                    width: 45px;
                    height: 49px;
                    display: inline-block;
                    cursor: pointer;
                    .iconfont, .ivu-icon {
                        color: rgba(122, 160, 212, 0.5);
                        line-height: 48px;
                        font-size: 20px;
                        &:hover {
                            color: rgba(122, 160, 212, 0.9);
                        }
                        &:active {
                            text-shadow: 0px 0px 5px rgba(122, 160, 212, 0.5);
                        }
                    }
                }
                .btn-layout {}
                .btn-style {}
                .btn-setting {}
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
                background: linear-gradient(to left, transparent 0% , rgba(149,193,241, 0.11) 50% , transparent 100%);
                &:hover {
                    color: rgba(149,221,255, 0.5);
                    background: linear-gradient(to left, transparent 0% , rgba(149,193,241, 0.33) 50% , transparent 100%);
                }
            }
        }

    }
</style>