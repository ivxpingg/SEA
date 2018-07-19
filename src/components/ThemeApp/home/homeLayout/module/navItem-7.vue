<template>
    <div class="navItem-7-container">
        <div class="item-title">
            <span class="text">大型科研仪器共享服务组件</span>

        </div>

        <div class="level-panel level-panel-1">

            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="s-chart-panel-2">
                            <div class="chart chart-5-1" ref="chart5_1"></div>
                            <div class="chart-value-5-1">
                                <span>共享仪器</span>
                                <br/>
                                <span class="value">16780</span>
                                <br/>
                                <span>台</span>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="s-chart-panel">
                            <div class="chart chart-1" ref="chart1"></div>
                            <div class="chart chart-2" ref="chart2"></div>
                            <div class="chart chart-3" ref="chart3"></div>
                            <div class="chart chart-4" ref="chart4"></div>
                            <div class="chart chart-5" ref="chart5"></div>

                            <div class="chart-value chart-value-1">99<br/>万</div>
                            <div class="chart-value chart-value-2">99<br/>万人</div>
                            <div class="chart-value chart-value-3">99<br/>项</div>
                            <div class="chart-value chart-value-4">99<br/>万元</div>
                            <div class="chart-value chart-value-5">99<br/>台</div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="s-chart-panel-3">
                            <div class="chart chart-1-1" ref="chart1_1"></div>
                            <div class="chart-value-1-1">
                                <span>平台交易额</span>
                                <br/>
                                <span class="value">183</span>
                                <br/>
                                <span>万</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="s-chart-panel-4">
                            <div class="chart chart-2-1" ref="chart2_1"></div>
                            <div class="chart-value-2-1">
                                <span>平台用户数量</span>
                                <br/>
                                <span class="value">355</span>
                                <br/>
                                <span>万人</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="s-chart-panel-5">
                            <div class="chart chart-3-1" ref="chart3_1"></div>
                            <div class="chart-value-3-1">
                                <span>平台服务项目</span>
                                <br/>
                                <span class="value">136</span>
                                <br/>
                                <span>项</span>
                            </div>
                        </div>
                    </div>
                    <!--<div class="swiper-slide">Slide 6</div>-->
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    import Echarts from 'echarts';
    import Utils from '../../../../../libs/utils';
    export default {
        name: "navItem-7",
        data() {
            return {
                chart1: null,
                chart2: null,
                chart3: null,
                chart4: null,
                chart5: null,
                chart1_1: null,
                chart2_1: null,
                chart3_1: null,
                chart4_1: null,
                chart5_1: null,

                optionChart: {
                    title: {
                        text: '',
                        textStyle: {
                            color: '#ff7664',
                            fontSize: '12',
                            align: 'center'
                        },
                        bottom: 0,
                        left: 'center'
                    },
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        position: function (point, params, dom, rect, size) {
                            // 固定在中间
                            return [(size.viewSize[0] - size.contentSize[0]) / 2, (size.viewSize[1] - size.contentSize[1]) / 2];
                        },
                        formatter: "{b}</br>{c} ({d}%)"
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                formatter: "{c}\n万人",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            // {value:234, name:'联盟广告'},
                            // {value:135, name:'视频广告'},
                        ]
                    }]
                },

                optionChart1: {
                    color: ['#ff7664', '#ffd2cf'],
                    title: {
                        text: '平台交易额',
                        textStyle: {
                            color: '#ff7664'
                        }
                    }
                },
                optionChart2: {
                    color: ['#e7d767', '#ff7664'],
                    title: {
                        text: '平台用户数量',
                        textStyle: {
                            color: '#e7d767'
                        }
                    }
                },
                optionChart3: {
                    color: ['#70a1e8', '#86cab4'],
                    title: {
                        text: '平台服务项目',
                        textStyle: {
                            color: '#70a1e8'
                        }
                    }
                },
                optionChart4: {
                    color: ['#86cab4', '#efde67'],
                    title: {
                        text: '仪器价值',
                        textStyle: {
                            color: '#86cab4'
                        }
                    }
                },
                optionChart5: {
                    color: ['#86cab4', '#d963ea', '#70a1e8', '#efde67', '#ff7664'],
                    title: {
                        text: '共享仪器',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    }
                },

                optionChart5_1: {
                    color: ['#86cab4', '#d963ea', '#70a1e8', '#efde67', '#ff7664'],
                    title: {
                        show: false,
                        text: '共享仪器',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{c}台"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}台",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [
                            {value:999, name:'分析仪器'},
                            {value:555, name:'特种检测仪器'},
                            {value:999, name:'海洋仪器'},
                            {value:555, name:'电子测量仪器'},
                            {value:777, name:'计量仪器'}
                        ]
                    }]
                },

                optionChart1_1: {
                    color: ['#ff7664', '#ffd2cf'],
                    title: {
                        show: false,
                        text: '平台交易',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{c}万"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}万",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [
                            {value:49, name:'仪器共享交易额'},
                            {value:134, name:'服务项目交易额'}
                        ]
                    }]
                },
                optionChart2_1: {
                    color: ['#e7d767', '#ff7664'],
                    title: {
                        show: false,
                        text: '平台用户数量',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{c}万人"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}万人",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [
                            {value:325, name:'用户'},
                            {value:30, name:'服务机构'}
                        ]
                    }]
                },
                optionChart3_1: {
                    color: ['#86cab4', '#d963ea', '#70a1e8', '#efde67', '#ff7664'],
                    title: {
                        show: false,
                        text: '平台服务项目',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{c}项"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}项",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [
                            {value:15, name:'生命科学'},
                            {value:30, name:'医药/CRO'},
                            {value:25, name:'试剂/耗材'},
                            {value:30, name:'检验检测'}
                        ]
                    }]
                },
                optionChart4_1: {
                    color: ['#86cab4', '#d963ea', '#70a1e8', '#efde67', '#ff7664'],
                    title: {
                        show: false,
                        text: '平台用户数量',
                        textStyle: {
                            color: '#76e4ff'
                        }
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{c}万人"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}万人",
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [
                            {value:325, name:'用户'},
                            {value:30, name:'服务机构'}
                        ]
                    }]
                },
            };
        },

        mounted() {
            this.initSwiper();
            this.initChart();
            // this.getDataChart1();
        },

        methods: {
            initSwiper() {
                var mySwiper = new Swiper (this.$refs.swiper, {
                    // loop: true,
                    // effect: 'cube',
                    initialSlide: 1,
                    autoplay: {
                        disableOnInteraction: false
                    }

                });
            },
            initChart() {
                this.chart1 = Echarts.init(this.$refs.chart1);
                this.optionChart1 = Utils.merge(this.optionChart, this.optionChart1);
                this.chart1.setOption(this.optionChart1);

                this.chart2 = Echarts.init(this.$refs.chart2);
                this.optionChart2 = Utils.merge(this.optionChart, this.optionChart2);
                this.chart2.setOption(this.optionChart2);

                this.chart3 = Echarts.init(this.$refs.chart3);
                this.optionChart3 = Utils.merge(this.optionChart, this.optionChart3);
                this.chart3.setOption(this.optionChart3);

                this.chart4 = Echarts.init(this.$refs.chart4);
                this.optionChart4 = Utils.merge(this.optionChart, this.optionChart4);
                this.chart4.setOption(this.optionChart4);

                this.chart5 = Echarts.init(this.$refs.chart5);
                this.optionChart5 = Utils.merge(this.optionChart, this.optionChart5);
                this.chart5.setOption(this.optionChart5);

                this.chart5_1 = Echarts.init(this.$refs.chart5_1);
                //this.optionChart5_1 = Utils.merge(this.optionChart, this.optionChart5_1);
                this.chart5_1.setOption(this.optionChart5_1);



                this.chart1_1 = Echarts.init(this.$refs.chart1_1);
                //this.optionChart5_1 = Utils.merge(this.optionChart, this.optionChart5_1);
                // console.dir(this.optionChart5_1);
                this.chart1_1.setOption(this.optionChart1_1);

                this.chart2_1 = Echarts.init(this.$refs.chart2_1);
                this.chart2_1.setOption(this.optionChart2_1);

                this.chart3_1 = Echarts.init(this.$refs.chart3_1);
                this.chart3_1.setOption(this.optionChart3_1);
            },

            getDataChart1() {
                this.optionChart1 = {};

            }
        }

    }
</script>
<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-7-container {
        position: relative;
        height: 100%;
        background-color: rgba(255,255,255,0.06);

        .level-panel {
            position: relative;
            margin: 0 24px;

            &.level-panel-1 {
                padding-top: 35px;
                .swiper-container {
                    height: 300px;

                    .s-chart-panel {
                        position: relative;
                        height: 100%;

                        .chart {
                            position: absolute;
                            height: 100%;

                            &.chart-1 {
                                top: 80px;
                                left: 0;
                                width: 25%;
                                height: 120px;
                            }
                            &.chart-2 {
                                top: 0px;
                                left: 25%;
                                width: 25%;
                                height: 120px;
                            }
                            &.chart-3 {
                                top: 0px;
                                left: 50%;
                                width: 25%;
                                height: 120px;
                            }
                            &.chart-4 {
                                top: 80px;
                                right: 0;
                                width: 25%;
                                height: 120px;
                            }
                            &.chart-5 {
                                left: 31.25%;
                                bottom: 15px;
                                width: 37.5%;
                                height: 180px;
                            }
                        }

                        .chart-value {
                            position: absolute;
                            padding: 4px 0;
                            text-align: center;
                            width: 25%;
                            height: 40px;
                            font-size: 12px;
                            line-height: 16px;

                            &.chart-value-1 {
                                top: 120px;
                                left: 0;
                                color: #ff7664;
                            }

                            &.chart-value-2 {
                                top: 40px;
                                left: 25%;
                                color: #e7d767;
                            }
                            &.chart-value-3 {
                                top: 40px;
                                left: 50%;
                                color: #70a1e8;
                            }
                            &.chart-value-4 {
                                top: 120px;
                                right: 0%;
                                color: #86cab4;
                            }
                            &.chart-value-5 {
                                left: 31.25%;
                                bottom: 85px;
                                width: 37.5%;
                                color: #76e4ff;
                            }
                        }
                    }

                    .s-chart-panel-2 {
                        position: relative;
                        height: 100%;

                        // 第二个面板
                        .chart-5-1 {
                            height: 100%;
                        }
                        .chart-value-5-1 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -28px;
                            margin-left: -30px;
                            width: 60px;
                            color: #76e4ff;
                            font-size: 12px;
                            line-height: 18px;
                            z-index: 1;
                            .value {
                                font-size: 16px;
                                letter-spacing: 2px;
                                line-height: 20px;
                            }
                        }
                    }

                    .s-chart-panel-3 {
                        position: relative;
                        height: 100%;

                        // 第三个面板
                        .chart-1-1 {
                            height: 100%;
                        }
                        .chart-value-1-1 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -28px;
                            margin-left: -30px;
                            width: 60px;
                            color: #76e4ff;
                            font-size: 12px;
                            line-height: 18px;
                            z-index: 1;
                            .value {
                                font-size: 16px;
                                letter-spacing: 2px;
                                line-height: 20px;
                            }
                        }
                    }

                    .s-chart-panel-4 {
                        position: relative;
                        height: 100%;

                        // 第四个面板
                        .chart-2-1 {
                            height: 100%;
                        }
                        .chart-value-2-1 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -28px;
                            margin-left: -40px;
                            width: 80px;
                            color: #76e4ff;
                            font-size: 12px;
                            line-height: 18px;
                            z-index: 1;
                            .value {
                                font-size: 16px;
                                letter-spacing: 2px;
                                line-height: 20px;
                            }
                        }
                    }

                    .s-chart-panel-5 {
                        position: relative;
                        height: 100%;

                        // 第三个面板
                        .chart-3-1 {
                            height: 100%;
                        }
                        .chart-value-3-1 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -28px;
                            margin-left: -40px;
                            width: 80px;
                            color: #76e4ff;
                            font-size: 12px;
                            line-height: 18px;
                            z-index: 1;
                            .value {
                                font-size: 16px;
                                letter-spacing: 2px;
                                line-height: 20px;
                            }
                        }
                    }

                    .s-chart-panel-6 {
                        position: relative;
                        height: 100%;

                        // 第三个面板
                        .chart-4-1 {
                            height: 100%;
                        }
                        .chart-value-4-1 {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -28px;
                            margin-left: -30px;
                            width: 60px;
                            color: #76e4ff;
                            font-size: 12px;
                            line-height: 18px;
                            z-index: 1;
                            .value {
                                font-size: 16px;
                                letter-spacing: 2px;
                                line-height: 20px;
                            }
                        }
                    }

                }
            }
        }
    }
</style>