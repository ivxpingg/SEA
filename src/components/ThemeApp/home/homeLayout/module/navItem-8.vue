<template>
    <div class="navItem-8-container">
        <!--<div class="item-title">-->
            <!--<span class="text">大型科研仪器共享服务组件</span>-->
        <!--</div>-->

        <div class="box-panel">

            <div class="time-panel">
                <div class="title">平台共享时长</div>
                <div class="value">{{dataInfo.share.shaertime}}h</div>
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
                                            <!--<div class="table-col">{{item.siiHinesename || ''}}</div>-->
                                            <div class="table-col">{{item.name || ''}}</div>
                                            <div class="table-col">{{item.value1}}</div>
                                            <!--<div class="table-col">{{item.siiServicetime}}</div>-->
                                            <div class="table-col">{{item.value2 || ''}}</div>
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
                            :speed='speed'
                            :content="appointmentContent">
                    </Marquee>

                </div>
            </div>

        </div>


    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
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

                appointmentContent: '',
                speed: 10
            };
        },
        components: {Marquee},
        mounted() {
            this.initSwiper();
            this.getData();
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

                // 表格

                // this.tableData = this.dataInfo.share.sharelist || [];

                // 正在预约

                this.appointmentContent = '';

                this.speed = this.dataInfo.appointment.orderofinfolist.length * this.speed;
                this.dataInfo.appointment.orderofinfolist.forEach(function (val) {
                    that.appointmentContent += ' 正在预约 : ' + val.infoofname + '<span style="display: inline-block; width: 50px;"></span>';
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