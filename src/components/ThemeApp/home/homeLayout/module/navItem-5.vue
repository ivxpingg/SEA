<template>
    <div class="navItem-5-container">
        <div class="item-title" @click="jumpPage">
            <span class="text">观测装备全景试验分析组件</span>
        </div>

        <div class="level-panel level-panel-1">

            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">

                    <!--<div class="swiper-slide">-->
                        <!--<div class="chart-box">-->

                            <!--<div class="chart1" ref="chart1"></div>-->
                            <!--<div class="chart2" ref="chart2">-->
                                <!--<div class="bg">-->
                                    <!--<div class="value1">-->
                                        <!--<div><span>平台交易额</span></div>-->
                                        <!--<div>300万</div>-->
                                    <!--</div>-->
                                    <!--<div class="value2">-->
                                        <!--<div><span>服务器资源</span></div>-->
                                        <!--<div>1000G</div>-->
                                    <!--</div>-->
                                    <!--<div class="value3">-->
                                        <!--<div><span>平台用户数</span></div>-->
                                        <!--<div>10万</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->

                        <!--</div>-->
                    <!--</div>-->

                    <div class="swiper-slide swiper-slide-chart">
                        <div class="item3-info">
                            <div class="title">服务申请数量</div>
                            <div class="value">500个</div>
                            <div class="chart-box" ref="chart4"></div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="chart3" ref="chart3">

                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="chart4">
                            <div class="bg">
                                <div class="value1">
                                    <div><span>平台交易额</span></div>
                                    <div>300万</div>
                                </div>
                                <div class="value2">
                                    <div><span>服务器资源</span></div>
                                    <div>1000G</div>
                                </div>
                                <div class="value3">
                                    <div><span>平台用户数</span></div>
                                    <div>10万</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Echarts from 'echarts';
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "navItem-5",
        data() {
            return {
                chart1: null,
                chart3: null,
                optionChart: {},
                optionChart1: {},

                chart4: null,
                optionChart4: {
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
                }
            };
        },
        mounted() {
            this.initSwiper();
            this.initChart();
        },

        methods: {
            jumpPage() {
                window.location.href = 'http://xmsoc.com:20500/qj/#/mapShow';
            },
            initSwiper() {

                var mySwiper = new Swiper(this.$refs.swiper, {
                    // loop: true,
                    // effect: 'cube',
                    direction: 'vertical',
                    autoplay: {
                        delay: 3000,
                        // disableOnInteraction: false,
                        reverseDirection: true
                    }

                });
            },
            initChart() {
                this.chart3 = Echarts.init(this.$refs.chart3);
                // this.optionChart1 = Utils.merge(this.optionChart, this.optionChart1);

                var option3 = {
                    title : {
                        show: true,
                        text: '海洋产业数据资源15类',
                        x:'center',
                        // y: 'bottom',
                        bottom: '20px',
                        textStyle: {
                            color: '#76e4ff',
                            fontSize: '13px'
                        }
                    },
                    tooltip : {
                        show: false,
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: false,
                        x : 'center',
                        y : 'bottom',
                        data:['海洋周边水质监测数据','海洋生鲜交易数据','海洋百科数据','海洋企业名录','水产养殖数据']
                    },
                    toolbox: {
                        show : false
                    },
                    calculable : true,
                    series : [
                        {
                            name:'海洋产业数据资源',
                            type:'pie',
                            radius : [30, 80],
                            center : ['50%', '50%'],
                            roseType : 'area',
                            label: {
                                normal: {
                                    show: true,
                                    formatter: "{b}:{c}",
                                    // position: 'left'
                                },
                                emphasis: {
                                    show: true,
                                    formatter: "{b}:{c}",
                                    textStyle: {
                                        fontSize: '12'
                                    }
                                }
                            },
                            data:[
                                {value:10, name:'海洋周边水质监测数据'},
                                {value:5, name:'海洋生鲜交易数据'},
                                {value:15, name:'海洋百科数据'},
                                {value:25, name:'海洋企业名录'},
                                {value:20, name:'水产养殖数据'}
                            ]
                        }
                    ]
                };

                this.chart3.setOption(option3);


                // this.chart1 = Echarts.init(this.$refs.chart1);
                //
                // var option1 = {
                //     title : {
                //         show: true,
                //         text: '海洋产业数据资源15类',
                //         x:'center',
                //         // y: 'bottom',
                //         bottom: '20px',
                //         textStyle: {
                //             color: '#76e4ff',
                //             fontSize: '13px'
                //         }
                //     },
                //     tooltip : {
                //         show: false,
                //         trigger: 'item',
                //         formatter: "{a} <br/>{b} : {c} ({d}%)",
                //         position: function (point, params, dom, rect, size) {
                //             // 固定在中间
                //             return [(size.viewSize[0] - size.contentSize[0]) / 2, (size.viewSize[1] - size.contentSize[1]) / 2];
                //         },
                //     },
                //     legend: {
                //         show: false,
                //         x : 'center',
                //         y : 'bottom',
                //         data:['海洋周边水质监测数据','海洋生鲜交易数据','海洋百科数据','海洋企业名录','水产养殖数据']
                //     },
                //     toolbox: {
                //         show : false
                //     },
                //     yAxis: {
                //         show: false
                //     },
                //     calculable : true,
                //     series : [
                //         {
                //             name:'海洋产业数据资源',
                //             type:'pie',
                //             center : ['50%', '50%'],
                //             // radius: [],
                //             label: {
                //                 normal: {
                //                     show: false,
                //                     formatter: "{b}\n{c}",
                //                     // position: 'center'
                //                 },
                //                 emphasis: {
                //                     show: false,
                //                     formatter: "{b}\n{c}",
                //                     textStyle: {
                //                         fontSize: '12'
                //                     }
                //                 }
                //             },
                //             data:[
                //                 {value:10, name:'海洋周边水质监测数据'},
                //                 {value:5, name:'海洋生鲜交易数据'},
                //                 {value:15, name:'海洋百科数据'},
                //                 {value:25, name:'海洋企业名录'},
                //                 {value:20, name:'水产养殖数据'}
                //             ]
                //         }
                //     ]
                // };
                //
                // this.chart1.setOption(option1);


                this.chart4 = Echarts.init(this.$refs.chart4);

                this.chart4.setOption(this.optionChart4);

            }
        }
    }
</script>
<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-5-container {
        height: 100%;
        background-color: rgba(255,255,255,0.06);

        .level-panel {
            position: relative;
            margin: 0 24px;
            height: 100%;
            &.level-panel-1 {
                height: 100%;

                .swiper-container {
                    height: 100%;
                    .swiper-slide {
                        height: 100%;

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

                        .chart-box {
                            height: 100%;
                            display: flex;

                            .chart1 {
                                flex: 1;
                            }
                            .chart2 {
                                position: relative;
                                flex: 1;
                                font-size: 12px;
                                line-height: 18px;

                                .bg {
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    margin-top: -121px;
                                    margin-left: -71px;
                                    width: 142px;
                                    height: 242px;
                                    background: url('./images/huanxing-bg.png') no-repeat center;

                                    .value1 {
                                        position: absolute;
                                        display: inline-block;
                                        top: 28%;
                                        right: -30px;
                                        color: #cfcc74;
                                    }
                                    .value2 {
                                        position: absolute;
                                        display: inline-block;
                                        top: 45%;
                                        left: -40px;
                                        color: #699998;
                                    }
                                    .value3 {
                                        position: absolute;
                                        display: inline-block;
                                        top: 72%;
                                        right: -30px;
                                        color: #c06162;
                                    }
                                }

                            }
                        }

                        .chart3 {
                            height: 100%;
                        }

                        .chart4 {
                            position: relative;
                            font-size: 12px;
                            line-height: 18px;
                            height: 100%;

                            .bg {
                                position: relative;
                                height: 100%;
                                background: url('./images/huanxing-bg.png') no-repeat center;

                                .value1 {
                                    position: absolute;
                                    display: inline-block;
                                    top: 38%;
                                    right: 10%;
                                    color: #cfcc74;
                                }
                                .value2 {
                                    position: absolute;
                                    display: inline-block;
                                    top: 48%;
                                    left: 10%;
                                    color: #699998;
                                }
                                .value3 {
                                    position: absolute;
                                    display: inline-block;
                                    top: 60%;
                                    right: 10%;
                                    color: #c06162;
                                }
                            }

                        }

                        .item3-info {
                            padding-top: 45px;

                            .title {
                                height: 40px;
                                line-height: 40px;
                                font-size: 28px;
                                color: #9bdcb3;
                                /*background: url('./images/jiaoyie.png') no-repeat center;*/
                                /*background-size: 100px 40px;*/
                            }
                            .value {
                                margin-top: 12px;
                                height: 52px;
                                color: #9bdcb3;
                                font-size: 26px;
                                line-height: 52px;
                                font-weight: 700;
                                letter-spacing: 4px;

                                /*background: rgba(27,36,101,0.5) url('./images/meiyuanfuhao.png') no-repeat 20px center;*/
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
    }
</style>