<template>
    <div class="showFace-container">
        <div class="left-panel" :class="{ 'gripOpen': gripOpen, 'gripClose': !gripOpen }">
            <div class="left-panel-inner">
                <div class="list-panel">
                    <div class="title">定制分析列表</div>
                    <div class="list" id="list">
                        <div class="list-inner">
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item active">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                            <div class="item">
                                <div class="item-title">产业现状综合分析</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grip" @click="onLeftPanelGrip"></div>
        </div>
        <div class="center-panel">
            <div class="echarts-area">

            </div>
        </div>
        <div class="right-panel">
            <div class="btn-panel" :class="{ 'btn-panel-close': !rightGripOpen }">
                <div class="btn-icon" title="添加" @click="addList">
                    <i class="iconfont icon-tianjia"></i>
                </div>
                <div class="btn-icon" title="编辑">
                    <i class="iconfont icon-bianji"></i>
                </div>
                <div class="btn-icon" title="删除">
                    <i class="iconfont icon-cha"></i>
                </div>
                <div class="btn-icon" title="" @click="onRightPanelClose">
                    <i class="iconfont icon-jinru"></i>
                </div>
            </div>
            <div class="open-btn-panel" @click="onRightPanelOpen"></div>
        </div>
    </div>
</template>

<script>
    import Iscroll from 'iscroll';
    export default {
        name: "showFace",
        data() {
            return {
                gripOpen: true,
                rightGripOpen: true
            };
        },

        mounted() {
            var scroll = new Iscroll('#list',{
                mouseWheel: true,
                scrollbars: true,
                // scrollbars: 'custom',
                mouseWheelSpeed: 10,
                fadeScrollbars: true,

            });
        },
        methods: {
            onLeftPanelGrip() {
                this.gripOpen = !this.gripOpen;
            },
            onRightPanelClose() {
                this.rightGripOpen = false;
            },
            onRightPanelOpen() {
                this.rightGripOpen = true;
            },
            // 添加微分析
            addList() {
                this.$router.push({
                    name: 'addOrEdit'
                });
            }

        }
    }
</script>

<style lang="scss" scoped>
    .showFace-container {
        display: flex;
        padding-top: 15px;
        height: 100%;
        .left-panel {
            position: relative;
            width: 180px;
            height: 666px;
            color: #FFF;
            border-radius: 0 35px 35px 0;
            transition: all 0.5s;

            .left-panel-inner {
                width: 100%;
                height: 100%;
                background-color: #142066;
                border-radius: 0 35px 35px 0;
                overflow: hidden;
                opacity: 1;
                transition: opacity 0.5s;

                .list-panel {
                    width: 180px;
                    height: 100%;

                    .title {
                        margin-top: 53px;
                        height: 33px;
                        font-size: 13px;
                        line-height: 33px;
                        text-align: center;
                        background-color: rgba(128,134,172,0.76);
                    }

                    .list {
                        position: relative;
                        height: 550px;
                        width: 180px;
                        overflow: hidden;
                        .list-inner {
                            padding-bottom: 45px;
                        }

                        .item {
                            height: 30px;
                            margin: 20px 0;
                            cursor: pointer;

                            &.active{
                                .item-title {
                                    background-color: rgba(79,88,140, 1);
                                }
                            }

                            .item-title {
                                height: 100%;
                                width: 165px;
                                color: #FFF;
                                font-size: 12px;
                                line-height: 30px;
                                text-indent: 24px;
                                background-color: rgba(79,88,140, 0.25);
                                border-radius: 0 15px 15px 0;
                                &:hover {
                                    background-color: rgba(79,88,140, 1);
                                }
                            }
                        }

                    }
                }
            }

            &.gripOpen {
                margin-left: 0;

                .left-panel-inner {
                    opacity: 1;
                }

                .grip {
                    right: 0;
                    background-color: #a1a6c2;
                    border-radius: 5px 0 0 5px;

                    &:after {
                        left: 0px;
                        border-color: transparent #1c59a3 transparent transparent;
                    }
                }
            }

            &.gripClose {
                margin-left: -180px;
                .left-panel-inner {
                    opacity: 0;
                }
                .grip {
                    right: -12px;
                    background-color: #4778b4;
                    border-radius: 0 5px 5px 0;

                    &:after {
                        left: 4px;
                        border-color: transparent transparent transparent #FFF;
                    }
                }
            }

            .grip {
                position: absolute;
                top: 300px;
                right: 0;
                width: 12px;
                height: 69px;
                background-color: #a1a6c2;
                z-index: 9999;
                transition: all 0.5s;
                cursor: pointer;
                border-radius: 5px 0 0 5px;

                &:after {
                    box-sizing: content-box;
                    position: absolute;
                    top: 26px;
                    left: 0px;
                    display: block;
                    content: " ";
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 9px 4px;
                    border-color: transparent #1c59a3 transparent transparent;
                    z-index: 1;
                    transition: all 0.5s;
                }
            }
        }
        .center-panel {
            flex: 1;

            .echarts-area {
                margin: 0 auto;
                width: 1100px;
                height: 666px;
                border: 1px solid #142066;
                border-radius: 35px;
            }
        }

        .right-panel {
            position: relative;
            width: 46px;
            height: 666px;

            .btn-panel {
                position: absolute;
                top: 203px;
                right: 0;
                padding: 20px 0;
                width: 46px;
                height: 260px;
                background-color: #FFF;
                border-width: 1px 0 1px 1px;
                border-color: #8cb3ec;
                border-style: solid;
                border-radius: 35px 0 0 35px;
                z-index: 2;
                transition: all 0.5s;
                /*box-shadow: 0 0 5px #ececec;*/

                &.btn-panel-close {
                    right: -46px;
                }

                .btn-icon {
                    margin-top: 9px;
                    width: 46px;
                    text-align: center;
                    cursor: pointer;

                    &:hover {
                        color: #0086b3;
                    }

                    .iconfont{
                        font-size: 30px;
                    }
                }
            }
            .open-btn-panel {
                position: absolute;
                top: 308px;
                right: 0;
                width: 36px;
                height: 50px;
                border-width: 1px 0 1px 1px;
                border-color: #8cb3ec;
                border-style: solid;
                border-radius: 35px 0 0 35px;
                z-index: 1;
                cursor: pointer;

                &:after {
                    position: absolute;
                    display: block;
                    content: " ";
                    top: 18px;
                    left: 2px;
                    width: 20px;
                    height: 14px;
                    border-style: solid;
                    border-width: 7px 10px;
                    border-color: transparent rgba(20,32,102, 1) transparent transparent;
                    border-radius: 3px;
                }
            }
        }
    }
</style>