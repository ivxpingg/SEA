<template>
    <div class="navItem-1-container">
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
                                <span class="value">{{dataInfo.rankCount.allnumber}}</span>
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

                            <div class="chart-value chart-value-1">{{dataInfo.statistics.alldealdown}}<br/>万</div>
                            <div class="chart-value chart-value-2">{{dataInfo.statistics.allusernumber}}<br/>人</div>
                            <div class="chart-value chart-value-3">{{dataInfo.statistics.allservicenumber}}<br/>项</div>
                            <div class="chart-value chart-value-4">{{dataInfo.statistics.allinfototal}}<br/>万元</div>
                            <div class="chart-value chart-value-5">{{dataInfo.statistics.allinstrnumber}}<br/>台</div>
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
                                <span class="value">{{dataInfo.userCount.allusernumber}}</span>
                                <br/>
                                <span>人</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="s-chart-panel-5">
                            <div class="chart chart-3-1" ref="chart3_1"></div>
                            <div class="chart-value-3-1">
                                <span>平台服务项目</span>
                                <br/>
                                <span class="value">{{dataInfo.service.allservicenumber}}</span>
                                <br/>
                                <span>项</span>
                            </div>
                        </div>
                    </div>
                    <!--<div class="swiper-slide">Slide 6</div>-->
                </div>
            </div>

        </div>

        <div class="level-panel level-panel-2">
            <div class="time-panel">
                <div class="title">平台共享时长</div>
                <div class="value">{{dataInfo.share.shaertime}}h</div>
            </div>
        </div>

        <div class="blue-line"></div>

        <div class="level-panel level-panel-3">
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
                                        <div class="table-col">{{item.siiHinesename || ''}}</div>
                                        <div class="table-col">{{item.value1}}</div>
                                        <div class="table-col">{{item.siiServicetime}}</div>
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
                        :speed='15'
                        :content="appointmentContent">
                </Marquee>

            </div>
        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    import Echarts from 'echarts';
    import Utils from '../../../../../libs/utils';
    import Marquee from '../../../marquee/marquee';
    export default {
        name: "navItem-1",
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
                            {value:100, name:'直接访问'},
                            {value:100, name:'邮件营销'},
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
                                formatter: "{b}\n{c}人"
                                // position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}\n{c}人",
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
                            {value:325, name:'消费用户'},
                            {value:30, name:'机构用户'}
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

                tableData: [
                    {
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
                }],

                dataInfo: {
                    // 平台用户数量
                    "userCount": {
                        "alluserofcon": 11,    // 消费用户总数
                        "allusernumber": 17,   // 平台用户数
                        "alluseroforg": 6      // 机构用户总数
                    },
                    // 共享仪器
                    "share": {
                        "sharelist": [{
                            "siiId": 29,                   // 仪器Id
                            "siiHinesename": "医疗救助",   // 仪器名称
                            "siiServicetime": 10,         // 仪器使用时长
                            "ssoSosid": 3,                // 仪器订单Id
                            "ssoCreatetime": "Aug 11, 2018 4:39:32 PM",  //仪器订单创建时间
                            "ssoProjectname": "检测项目6"   // 仪器检测项目
                        }],
                        "shaertime": 272
                    },
                    // 大型仪器服务的预约排行项目（共排行前5条）数据。
                    // (平台服务项目)
                    "service": {
                        "allservicenumber": 9,
                        "servicelist": [{
                            "serviceId": 36,           // 服务项目Id
                            "serviceName": "测试发布",  // 服务项目名
                            "sCount": 5,               // 该服务被预约的总和
                            "ssimagelist": [{
                                "serviceId": 36
                            }]
                        }, {
                            "serviceId": 34,
                            "serviceName": "bvcfdg",
                            "sCount": 3,
                            "ssimagelist": [{
                                "serviceId": 34
                            }]
                        }, {
                            "serviceId": 35,
                            "serviceName": "ererv",
                            "sCount": 1,
                            "ssimagelist": [{
                                "serviceId": 35
                            }]
                        }]
                    },
                    // 大型仪器项目订单统计
                    "orderCount": {
                        "alldealdownofinfo": 3,      // 仪器交易数
                        "alldealdownofservice": 6,  // 服务交易数
                        "alldealdown": 9           // 系统产生的总交易数
                    },
                    // 预约的共享仪器（正在预约）
                    "appointment": {
                        // 最新的正在被预约的仪器集合，共3条数据
                        "orderofinfolist": [{
                            "soid": 155,                 // 仪器预约Id
                            "infoofname": "科研植被考察", //仪器名称
                            "Sample": []
                        }]
                    },
                    // 共享仪器
                    "rankCount": {
                        "orderinfolist":
                            [{
                            "bId": 1,
                            "bName": "分析仪器",    // 仪器名称
                            "sCount": "45",        // 所属分类的仪器个数
                            "oCount": "8"          // 仪器预约总数
                        }, {
                            "bId": 129,
                            "bName": "物理性能测试仪器",
                            "sCount": "4",
                            "oCount": "3"
                        }, {
                            "bId": 441,
                            "bName": "工艺实验设备",
                            "sCount": "1",
                            "oCount": "0"
                        }, {
                            "bId": 362,
                            "bName": "电子测量仪器",
                            "sCount": "0",
                            "oCount": "0"
                        }, {
                            "bId": 395,
                            "bName": "海洋仪器",
                            "sCount": "0",
                            "oCount": "0"
                        }, {
                            "bId": 172,
                            "bName": "计量仪器",
                            "sCount": "0",
                            "oCount": "0"
                        }, {
                            "bId": 486,
                            "bName": "其他仪器",
                            "sCount": "0",
                            "oCount": "0"
                        }],
                        "allnumber": 11      // 共享仪器总预约数
                    },
                    // 共享仪器2
                    "statistics": {
                        "allinfototal": 202286,     // 平台仪器价值
                        "allusernumber": 17,        // 平台用户数
                        "allservicenumber": 13,     // 平台服务项目
                        "allinstrnumber": 64,       // 共享仪器总数
                        "alldealdown": 9            // 平台交易总数
                    }
                },

                appointmentContent: ''
            };
        },
        components: {Marquee},
        watch: {
            optionChart1: {
                deep: true,
                handler(val, oldVal) {
                    this.chart1.setOption(val);
                }
            }
        },
        mounted() {
             this.initSwiper();
             this.initChart();
             this.getDataChart1();

             this.getData();
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

                new Swiper (this.$refs.swiperTable, {
                    direction: 'vertical',
                    loop: true,
                    slidesPerView: 4,
                    loopedSlides: 9,
                    autoplay: {
                        disableOnInteraction: false
                    },
                    delay: 0
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
            },

            getData() {
                var that = this;

                that.$http({
                    method: 'get',
                    url: '/ocean/panoramic/themeDataShow/instrumentShare'
                }).then(function (response) {
                    if (response.status === 1) {
                        that.$set(that, 'dataInfo', response.result);
                        that.resetEchartsOption();
                    }
                }).catch(function (e) {

                })
            },

            // 重置
            resetEchartsOption() {
                var that = this;
                // 共享仪器
                this.optionChart5_1.series[0].data = [];
                this.dataInfo.rankCount.orderinfolist.forEach(function (val) {
                    that.optionChart5_1.series[0].data.push({
                        value: val.oCount,
                        name: val.bName
                    });
                });
                this.chart5_1.setOption(this.optionChart5_1);

                // 共享仪器2

                // 平台用户数量
                this.optionChart2_1.series[0].data = [
                    {value: this.dataInfo.userCount.alluserofcon, name: '消费用户'},
                    {value: this.dataInfo.userCount.alluseroforg, name: '机构用户'}
                ];

                this.chart2_1.setOption(this.optionChart2_1);

                // 平台服务项目
                this.optionChart3_1.series[0].data = [];
                this.dataInfo.service.servicelist.forEach(function (val) {
                    that.optionChart3_1.series[0].data.push({
                        value: val.sCount,
                        name: val.serviceName
                    });
                });
                this.chart3_1.setOption(this.optionChart3_1);

                // 表格

                this.tableData = this.dataInfo.share.sharelist || [];

                // 正在预约

                this.appointmentContent = '';
                this.dataInfo.appointment.orderofinfolist.forEach(function (val) {
                    that.appointmentContent += ' 正在预约 : ' + val.infoofname + '。。。  ';
                });
            }
        }
    }
</script>

<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" scoped>
    .navItem-1-container {
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
            &.level-panel-2 {
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
            }
            &.level-panel-3 {
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
        }

        .blue-line {
            margin: 16px auto;
            width: 228px;
            height: 1px;
            background-color: rgba(130, 229, 255, 0.62);
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