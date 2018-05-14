<template>
    <div class="navItem-4-container">
        <div class="item-title">
            <span class="text">产业营销组件</span>
        </div>

        <div class="level-panel level-panel-1">

            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="bingtu-box">
                            <div class="title">入住商家</div>
                            <div class="value">1000家</div>
                        </div>
                        <div class="leida-panel">
                            <div class="leida-box box1">
                                <div class="title title1">平台产品</div>
                                <div class="value">30000种</div>
                                <div class="title title2">交易金额</div>
                                <div class="value">10000万</div>
                            </div>
                            <div class="leida-box box2">
                                <div class="title">畅销产品</div>
                                <div class="value">300种</div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="leida-info-1">
                            <div class="center-value">
                                <div class="title">平台产品</div>
                                <div class="value">30000种</div>
                                <div class="title">交易金额</div>
                                <div class="value">30000万</div>
                            </div>
                            <div class="value1">
                                <div class="value">10000种</div>
                                <div class="title">海洋生物医疗</div>
                            </div>
                            <div class="value2">
                                <div class="value">10000种</div>
                                <div class="title">海洋装备</div>
                            </div>
                            <div class="value3">
                                <div class="value">10000种</div>
                                <div class="title">海洋生鲜</div>
                            </div>
                            <div class="value4">
                                <div class="value">400万</div>
                                <div class="title">海洋生物医疗</div>
                            </div>
                            <div class="value5">
                                <div class="value">400万</div>
                                <div class="title">海洋装备</div>
                            </div>
                            <div class="value6">
                                <div class="value">400万</div>
                                <div class="title">海洋生鲜</div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="leida-info-2">
                            <div class="center-value">
                                <div class="title">畅销产品</div>
                                <div class="value">30000种</div>
                            </div>
                            <div class="value1">
                                <div class="value">10000种</div>
                                <div class="title">海洋生物医疗</div>
                            </div>
                            <div class="value2">
                                <div class="value">10000种</div>
                                <div class="title">海洋装备</div>
                            </div>
                            <div class="value3">
                                <div class="value">10000种</div>
                                <div class="title">海洋生鲜</div>
                            </div>
                            <div class="value4">
                                <div class="value">400万</div>
                                <div class="title">海洋生物医疗</div>
                            </div>
                            <div class="value5">
                                <div class="value">400万</div>
                                <div class="title">海洋装备</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "navItem-4",
        data() {
            return {};
        },
        mounted() {
            this.initSwiper();
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper (this.$refs.swiper, {
                    // loop: true,
                    effect: 'cube',
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 3000,
                        reverseDirection: true
                    }
                });
            }
        }
    }
</script>
<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-4-container {
        height: 100%;
        background-color: rgba(255,255,255,0.06);

        .level-panel {
            position: relative;
            margin: 0 24px;
            &.level-panel-1 {
                padding-top: 35px;


                .swiper-slide {
                    position: relative;
                    font-size: 12px;
                    line-height: 18px;

                    .bingtu-box {
                        position: relative;
                        margin: 10px auto 0;
                        width: 147px;
                        height: 72px;
                        background: url('./images/yibiaopan-bg.png') no-repeat center;
                        color: #76e4ff;
                        text-align: center;
                        letter-spacing: 4px;

                        .title {
                            padding-top: 34px;
                        }
                        .value {
                            font-size: 16px;
                            line-height: 20px;
                        }
                    }

                    .leida-panel {
                        position: relative;
                        margin-top: 35px;
                        display: flex;
                        height: 150px;
                        .leida-box {
                            flex: 1;
                            background: url('./images/bowen-bg-1.png') no-repeat center;
                            background-size: 150px 150px;
                            color: #17172f;
                            .title {
                                padding-top: 55px;
                            }
                            .value {}

                            &.box1 {
                                .title1 {
                                    padding-top: 35px;
                                }
                                .title2 {
                                    padding-top: 4px;
                                }
                            }
                            &.box2 { }
                        }
                    }

                    .leida-info-1 {
                        position: relative;
                        margin: 0px auto 0;
                        width: 300px;
                        height: 300px;
                        background: url('./images/bowen-bg-2.png') no-repeat center;
                        background-size: 350px 350px;

                        color: #76e4ff;

                        .center-value {
                            position: absolute;
                            top: 42%;
                            width: 100%;
                            left: 5px;
                            height: 80px;
                            text-align: center;
                            line-height: 16px;
                            color: #17172f;

                            .value {
                                letter-spacing: 2px;
                                font-size: 13px;
                            }

                        }

                        .value1 {
                            position: absolute;
                            top: 45%;
                            left: -8%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.8);
                        }
                        .value2 {
                            position: absolute;
                            top: 1%;
                            left: 68%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.9);
                        }
                        .value3 {
                            position: absolute;
                            top: 1%;
                            left: 8%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value4 {
                            position: absolute;
                            top: 75%;
                            left: 11%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value5 {
                            position: absolute;
                            top: 69%;
                            left: 68%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.8);
                        }
                        .value6 {
                            position: absolute;
                            top: 39%;
                            left: 79%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.9);
                        }
                    }


                    .leida-info-2 {
                        position: relative;
                        margin: 0px auto 0;
                        width: 300px;
                        height: 300px;
                        background: url('./images/bowen-bg-3.png') no-repeat center;
                        background-size: 350px 350px;

                        color: #76e4ff;

                        .center-value {
                            position: absolute;
                            top: 42%;
                            width: 100%;
                            left: 5px;
                            height: 80px;
                            text-align: center;
                            line-height: 16px;
                            color: #17172f;

                            .value {
                                letter-spacing: 2px;
                                font-size: 13px;
                            }

                        }

                        .value1 {
                            position: absolute;
                            top: 4%;
                            left: 6%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.8);
                        }
                        .value2 {
                            position: absolute;
                            top: 0%;
                            left: 66%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.9);
                        }
                        .value3 {
                            position: absolute;
                            top: 63%;
                            left: 90%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value4 {
                            position: absolute;
                            top: 80%;
                            left: 45%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.8);
                        }
                        .value5 {
                            position: absolute;
                            top: 69%;
                            left: -4%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }

                    }

                }
            }
        }
    }
</style>