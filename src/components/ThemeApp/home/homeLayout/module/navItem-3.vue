<template>
    <div class="navItem-3-container">
        <div class="item-title">
            <span class="text">科技成果共享服务组件</span>
        </div>

        <div class="level-panel level-panel-1">

            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="item item1">
                            <div class="title title1">平台服务</div>
                            <div class="bar"></div>
                            <div class="value">{{platform_services_sum}}起</div>
                        </div>
                        <div class="item item2">
                            <div class="title">平台用户数量</div>
                            <div class="bar"></div>
                            <div class="value">{{dataInfo.achievementData['平台用户总数']}}人</div>
                        </div>
                        <div class="item item3">
                            <div class="title">平台交易金额</div>
                            <div class="bar"></div>
                            <div class="value">{{dataInfo.achievementData['交易总额']}}元</div>
                        </div>
                        <div class="item item4">
                            <div class="bar"></div>
                            <div class="value">
                                <div>科研成果</div>
                                <div>{{dataInfo.achievementData['发布成果总数']}}项</div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="item4-info">
                            <div class="title title1">发明专利290项</div>
                            <div class="title title2">软件著作90项</div>
                            <div class="title title3">实用新型专利10项</div>
                            <div class="title title4">发表论文总数9352篇</div>
                            <div class="title title5">各类涉海奖项172项</div>
                            <div class="title title-name">科研成果共计9914项</div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="item1-info">
                            <div class="title title1">科研需求{{dataInfo.achievementNum['科研需求总数']}}例</div>
                            <div class="title title2">难题发布{{dataInfo.achievementNum['难题发布总数']}}个</div>
                            <div class="title title3">技术方案评审{{dataInfo.achievementNum['技术方案评审总次数']}}项</div>
                            <div class="title title4">可视化洽谈{{dataInfo.achievementNum['可视化洽谈总次数']}}次</div>
                            <div class="title title-name">平台服务{{platform_services_sum}}起</div>
                        </div>
                    </div>

                    <!--<div class="swiper-slide swiper-slide-chart">-->
                        <!--<div class="item3-info">-->
                            <!--<div class="title"></div>-->
                            <!--<div class="value">554000.00元</div>-->
                            <!--<div class="chart-box" ref="chart1"></div>-->
                        <!--</div>-->
                    <!--</div>-->

                    <div class="swiper-slide">
                        <div class="item2-info">
                            <div class="title title1">用户数量{{dataInfo.achievementData['普通用户总数']}}人</div>
                            <div class="title title2">专家{{dataInfo.achievementData['专家用户总数']}}人</div>
                            <div class="title title3">科研机构{{dataInfo.achievementData['企事业用户总数']}}家</div>
                            <div class="title title-name">平台用户数量{{dataInfo.achievementData['平台用户总数']}}人</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

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
</template>

<script>
    import Marquee from '../../../marquee/marquee';
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    import Echarts from 'echarts';
    export default {
        name: "navItem-3",
        computed: {
            // 平台服务总数
            platform_services_sum() {
                var sum = 0;
                for(var key in this.dataInfo.achievementNum) {
                    sum += this.dataInfo.achievementNum[key];
                }
                return sum;
            }
        },
        data() {
            return {
                chart1: null,
                optionChart1: {
                    color: ['#c12e34', '#e6b600'],
                    grid: {
                        show: false,
                        top: 10,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {
                            opacity: 0.5
                        },
                        smooth: true
                    }]
                },

                dataInfo: {
                    "achievementData": {
                        "企事业用户总数": 35,
                        "发布成果总数": 11, // 科技成果
                        "普通用户总数": 33,
                        "平台用户总数": 94,
                        "交易总额": 0,
                        "专家用户总数": 0
                    },
                    "newAchievement": [{
                        "resultId": 15,
                        "resultName": "南日岛风电区全潜式可升降刚性网箱系统",
                        "pay": [{
                            "resultId": 15
                        }, {
                            "resultId": 15
                        }],
                        "image": [{
                            "resultId": 15
                        }, {
                            "resultId": 15
                        }],
                        "rdealPayStatus": "0"
                    }, {
                        "resultId": 11,
                        "resultName": "发酵技术在有机固体废弃物资源化",
                        "pay": [{
                            "resultId": 11
                        }],
                        "image": [{
                            "resultId": 11
                        }],
                        "rdealPayStatus": "2"
                    }],
                    "achievementNum": {
                        "科研需求总数": 49,
                        "技术方案评审总次数": 42,
                        "难题发布总数": 35,
                        "可视化洽谈总次数": 511
                    }
                }
            };
        },
        components: {Marquee},
        mounted() {
            this.initSwiper();
            // this.initChart();
            this.getData();
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper (this.$refs.swiper, {
                    // loop: true,
                    effect: 'cube',
                    autoplay: {
                        // disableOnInteraction: true
                        delay: 3000,
                        reverseDirection: true
                    }
                });
            },

            initChart() {
                this.chart1 = Echarts.init(this.$refs.chart1);

                this.chart1.setOption(this.optionChart1);
            },

            getData() {
                var that = this;

                that.$http({
                    method: 'get',
                    url: '/ocean/panoramic/themeDataShow/achievementShare'
                }).then(function (response) {
                    if (response.status === 1) {
                        that.$set(that.dataInfo, 'achievementData', response.result.achievementData);
                        that.$set(that.dataInfo, 'achievementNum', response.result.achievementData);
                    }
                }).catch(function (e) {

                })
            }
        }
    }
</script>

<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-3-container {
        height: 100%;
        background-color: rgba(255,255,255,0.06);

        font-size: 12px;
        line-height: 18px;

        .level-panel {
            &.level-panel-1 {
                padding-top: 45px;
                height: 280px;
                margin: 0 20px;

                .swiper-container {
                    height: 100%;

                    .swiper-slide {

                        &.swiper-slide-chart {
                            .chart-box {
                                opacity: 0;
                            }

                        }
                        &.swiper-slide-active {
                            .chart-box {
                                opacity: 1;
                            }
                        }

                        .item {
                            display: flex;
                            height: 29px;

                            .title {
                                width: 78px;
                                line-height: 29px;
                                text-align: left;

                                &.title1 {
                                    letter-spacing: 7px;
                                }
                            }
                            .bar {
                                flex: 1;
                            }
                            .value {
                                width: 80px;
                                text-align: left;
                                text-indent: 12px;
                            }
                            &.item1 {
                                margin-top: 20px;
                                color: #ed7363;
                                .title {}

                                .bar {
                                    background: url('./images/gxcg-h1.png') no-repeat center center;
                                    background-size: 100% auto;
                                }
                                .value {
                                    line-height: 29px;
                                }
                            }
                            &.item2 {
                                margin-top: 12px;
                                color: #efde67;
                                .bar {
                                    background: url('./images/gxcg-h2.png') no-repeat center center;
                                    background-size: 100% auto;
                                }
                                .value {
                                    line-height: 29px;
                                }
                            }
                            &.item3 {
                                margin-top: 12px;
                                color: #81c2ad;
                                .bar {
                                    background: url('./images/gxcg-h3.png') no-repeat center center;
                                    background-size: 100% auto;
                                }
                                .value {
                                    line-height: 29px;
                                }
                            }
                            &.item4 {
                                margin-top: 36px;
                                color: #95ddff;
                                .bar {
                                    background: url('./images/gxcg-h4.png') no-repeat center center;
                                    background-size: 100% auto;
                                }
                                .value {
                                    line-height: 14px;
                                }
                            }
                        }

                        .item4-info {
                            position: relative;
                            margin: 45px auto 0;
                            max-width: 338px;
                            height: 139px;
                            background: url('./images/gxcg-h4-1.png') no-repeat center;
                            background-size: 100% auto;

                            .title {
                                position: absolute;
                                &.title1 {
                                    top: -10px;
                                    left: 15%;
                                    color: #ed7262;
                                }
                                &.title2 {
                                    top: 10%;
                                    left: 26%;
                                    color: #efde67;
                                }
                                &.title3 {
                                    top: 22%;
                                    left: 42%;
                                    color: #86cab4;
                                }
                                &.title4 {
                                    top: 35%;
                                    left: 62%;
                                    color: #70a1e8;
                                }
                                &.title5 {
                                    top: 48%;
                                    left: 86%;
                                    color: #d963ea;
                                    width: 60px;
                                }

                                &.title-name {
                                    left: 5%;
                                    top: 110%;
                                    font-size: 14px;
                                    letter-spacing: 2px;
                                    color: #95ddff;
                                }
                            }

                        }

                        .item1-info {
                            position: relative;
                            margin: 37px auto 0;
                            max-width: 338px;
                            height: 139px;
                            background: url('./images/gxcg-h1-1.png') no-repeat center;
                            background-size: 100% auto;

                            .title {
                                position: absolute;
                                &.title1 {
                                    top: -10px;
                                    left: 10%;
                                    color: #fc9b8e;
                                }
                                &.title2 {
                                    top: 7%;
                                    left: 37%;
                                    color: #ffad9f;
                                }
                                &.title3 {
                                    top: 25%;
                                    left: 61%;
                                    color: #ffc1b5;
                                }
                                &.title4 {
                                    top: 44%;
                                    left: 80%;
                                    color: #fc8879;
                                }

                                &.title-name {
                                    left: 5%;
                                    top: 110%;
                                    font-size: 14px;
                                    letter-spacing: 2px;
                                    color: #95ddff;
                                }
                            }
                        }

                        .item2-info {
                            position: relative;
                            margin: 37px auto 0;
                            max-width: 338px;
                            height: 139px;
                            background: url('./images/gxcg-h2-1.png') no-repeat center;
                            background-size: 100% auto;

                            .title {
                                position: absolute;
                                &.title1 {
                                    top: -8px;
                                    left: 11%;
                                    color: #fdf4bf;
                                }
                                &.title2 {
                                    top: 14%;
                                    left: 47%;
                                    color: #faeea1;
                                }
                                &.title3 {
                                    top: 42%;
                                    left: 78%;
                                    color: #f4e261;
                                }

                                &.title-name {
                                    left: 5%;
                                    top: 110%;
                                    font-size: 14px;
                                    letter-spacing: 2px;
                                    color: #95ddff;
                                }
                            }
                        }

                        .item3-info {

                            .title {
                                height: 40px;
                                background: url('./images/jiaoyie.png') no-repeat center;
                                background-size: 100px 40px;
                            }
                            .value {
                                margin-top: 12px;
                                height: 52px;
                                color: #9bdcb3;
                                font-size: 26px;
                                line-height: 52px;
                                font-weight: 700;
                                letter-spacing: 4px;
                                
                                background: rgba(27,36,101,0.5) url('./images/meiyuanfuhao.png') no-repeat 20px center;
                                background-size: 25px auto;
                                border-radius: 8px;

                            }
                            .chart-box {
                                height: 120px;
                            }
                        }

                    }

                }
            }
        }

        .roll-info-panel {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 25px;
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
</style>