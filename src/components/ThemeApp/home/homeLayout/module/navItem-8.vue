<template>
    <div class="navItem-8-container">
        <!--<div class="item-title">-->
            <!--<span class="text">大型科研仪器共享服务组件</span>-->
        <!--</div>-->

        <div class="box-panel">

            <div class="time-panel">
                <div class="title">平台共享时长</div>
                <div class="value">9000h</div>
            </div>
            <div class="blue-line"></div>
            <div class="table-box">
                <div class="table-border-bg-lv1">
                    <div class="table-border-bg-lv2">
                        <div class="table-panel">
                            <div class="table-title">
                                <div class="title title-1">仪器名称</div>
                                <div class="title title-2">共享时长</div>
                                <div class="title title-3">使用时长</div>
                                <div class="title title-4">仪器状态</div>
                                <div class="title title-5">利用率</div>
                            </div>
                            <div class="swiper-wrapper table-swiper-wrapper" ref="swiperTable">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="item in tableData">
                                        <div class="table-row">
                                            <div class="table-col">{{item.name}}</div>
                                            <div class="table-col">{{item.value1}}</div>
                                            <div class="table-col">{{item.value2}}</div>
                                            <div class="table-col">{{item.value3}}</div>
                                            <div class="table-col">{{item.value4}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="blue-line"></div>
            <div class="roll-info-panel">
                <div class="roll-info-title">正在预约</div>
                <div class="roll-info-content">
                    <Marquee
                            font="12px"
                            :speed='35'
                            content="FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。FF正在预约。。。">
                    </Marquee>

                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import Marquee from '../../../marquee/marquee';
    export default {
        name: "navItem-8",
        data() {
            return {
                tableData: [{
                    name: '质谱仪1',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪2',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪3',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪4',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪5',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪6',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪7',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                },{
                    name: '质谱仪8',
                    value1: '300h',
                    value2: '200h',
                    value3: '运行中',
                    value4: '90%'
                }]
            };
        },
        components: {Marquee},
        mounted() {
            this.initSwiper();
        },
        methods: {
            initSwiper() {
                new Swiper (this.$refs.swiperTable, {
                    direction: 'vertical',
                    loop: true,
                    slidesPerView: 4,
                    loopedSlides: 9,
                    autoplay: true,
                    delay: 0,
                    disableOnInteraction: false
                });
            }
        }
    }
</script>
<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-8-container {
        position: relative;
        height: 100%;
        background-color: rgba(255,255,255,0.06);

        .box-panel {
            box-sizing: border-box;
            position: relative;
            height: 100%;
            padding: 20px 24px 0;
            .time-panel {
                margin: 0 auto;
                width: 175px;
                height: 45px;
                border: 2px solid #82e5ff;
                border-radius: 22px;
                color: #76e4ff;
                text-align: center;
                .title {
                    font-size: 12px;
                    line-height: 16px;
                }
                .value {
                    font-size: 20px;
                    line-height: 24px;
                    letter-spacing: 5px;
                }
            }

            .table-box {
                position: relative;
                height: 182px;

                .table-border-bg-lv1 {
                    box-sizing: border-box;
                    height: 100%;
                    background: transparent url("./images/table-border-bg.png") no-repeat center;
                    background-size: 100% 100%;
                    overflow: hidden;

                    .table-panel {
                        height: 182px;
                        font-size: 12px;
                        line-height: 20px;
                        color: #76e4ff;

                        overflow: hidden;
                        border: 4px solid transparent;
                        border-radius: 36px;
                        background-color: transparent;

                        .table-title {
                            position: relative;
                            display: flex;
                            line-height: 20px;
                            background-color: #151956;
                            z-index: 2;

                            .title {
                                flex: 1;
                                text-decoration: underline;
                            }
                        }

                        .table-swiper-wrapper {
                            position: relative;
                            box-sizing: initial;
                            height: 160px;
                            z-index: 1;

                            .table-row {
                                display: flex;
                                height: 40px;
                                line-height: 20px;
                                border-top: 20px solid rgba(255,255,255,0.1);
                                background-color: #151956;
                                .table-col {
                                    height: 20px;
                                    line-height: 20px;
                                    flex: 1;
                                }
                            }

                        }
                    }
                }
            }

            .blue-line {
                margin: 10px auto;
                width: 228px;
                height: 1px;
                background-color: rgba(130, 229, 255, 0.62);
            }

            .roll-info-panel {
                position: absolute;
                left: 24px;
                right: 24px;
                bottom: 15px;
                height: 26px;
                line-height: 26px;
                font-size: 12px;
                color: #4d93ac;
                overflow: hidden;
                z-index: 1;

                .roll-info-title {
                    position: absolute;
                    left: 0;
                    width: 66px;
                    height: 26px;
                    text-align: center;
                    background-color: #111137;
                }
                .roll-info-content {
                    height: 26px;
                    margin-left: 66px;
                }
            }
        }
    }
</style>