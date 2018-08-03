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
                            <div class="value">{{dataInfo.gathered.shop_count}}家</div>
                        </div>
                        <div class="leida-panel">
                            <div class="leida-box box1">
                                <div class="title title1">平台产品</div>
                                <div class="value">{{dataInfo.gathered.goods_count}}种</div>
                                <div class="title title2">交易金额</div>
                                <div class="value">{{dataInfo.gathered.trade_amount}}万</div>
                            </div>
                            <div class="leida-box box2">
                                <div class="title">畅销产品</div>
                                <div class="value">{{dataInfo.gathered.bestseller_count}}种</div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="leida-info-1">
                            <div class="center-value">
                                <div class="title">平台产品</div>
                                <div class="value">{{dataInfo.trades.goods_count}}种</div>
                                <div class="title">交易金额</div>
                                <div class="value">{{dataInfo.trades.trade_amount}}万</div>
                            </div>
                            <div class="value1 text-circle">
                                <div class="value">{{dataInfo.trades.quantity[0].quantity}}种</div>
                                <div class="title" v-text="dataInfo.trades.quantity[0].name">海洋生物医疗</div>
                            </div>
                            <div class="value2 text-circle">
                                <div class="value">{{dataInfo.trades.quantity[1].quantity}}种</div>
                                <div class="title" v-text="dataInfo.trades.quantity[1].name">海洋装备</div>
                            </div>
                            <div class="value3 text-circle">
                                <div class="value">{{dataInfo.trades.quantity[3].quantity}}种</div>
                                <div class="title" v-text="dataInfo.trades.quantity[3].name">海洋生鲜</div>
                            </div>
                            <div class="value4 text-circle">
                                <div class="value">{{dataInfo.trades.amount[0].amount}}万</div>
                                <div class="title" v-text="dataInfo.trades.amount[0].name">海洋生物医疗</div>
                            </div>
                            <div class="value5 text-circle">
                                <div class="value">{{dataInfo.trades.amount[1].amount}}万</div>
                                <div class="title" v-text="dataInfo.trades.amount[1].name">海洋装备</div>
                            </div>
                            <div class="value6 text-circle">
                                <div class="value">{{dataInfo.trades.amount[3].amount}}万</div>
                                <div class="title" v-text="dataInfo.trades.amount[3].name">海洋生鲜</div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="leida-info-2">
                            <div class="center-value">
                                <div class="title">畅销产品</div>
                                <div class="value">{{dataInfo.sales.total}}种</div>
                            </div>
                            <div class="value1 text-circle"
                                 @click="link_goto(dataInfo.sales.bestsellers[0].link)">
                                <div class="value">{{dataInfo.sales.bestsellers[0].count}}</div>
                                <div class="title"
                                     v-text="dataInfo.sales.bestsellers[0].name"
                                     :title="dataInfo.sales.bestsellers[0].name">海洋生物医疗</div>
                            </div>
                            <div class="value2 text-circle"
                                 @click="link_goto(dataInfo.sales.bestsellers[1].link)">
                                <div class="value">{{dataInfo.sales.bestsellers[1].count}}</div>
                                <div class="title"
                                     v-text="dataInfo.sales.bestsellers[1].name"
                                     :title="dataInfo.sales.bestsellers[1].name">海洋装备</div>
                            </div>
                            <div class="value3 text-circle"
                                 @click="link_goto(dataInfo.sales.bestsellers[2].link)">
                                <div class="value">{{dataInfo.sales.bestsellers[2].count}}</div>
                                <div class="title"
                                     v-text="dataInfo.sales.bestsellers[2].name"
                                     :title="dataInfo.sales.bestsellers[2].name">海洋生鲜</div>
                            </div>
                            <div class="value4 text-circle"
                                 @click="link_goto(dataInfo.sales.bestsellers[3].link)">
                                <div class="value">{{dataInfo.sales.bestsellers[3].count}}</div>
                                <div class="title"
                                     v-text="dataInfo.sales.bestsellers[3].name"
                                     :title="dataInfo.sales.bestsellers[3].name">海洋生物医疗</div>
                            </div>
                            <div class="value5 text-circle"
                                 @click="link_goto(dataInfo.sales.bestsellers[4].link)">
                                <div class="value">{{dataInfo.sales.bestsellers[4].count}}</div>
                                <div class="title"
                                     v-text="dataInfo.sales.bestsellers[4].name"
                                     :title="dataInfo.sales.bestsellers[4].name">海洋装备</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    import Utils from '../../../../../libs/utils';
    export default {
        name: "navItem-4",
        data() {
            return {
                dataInfo: {
                    "sales": {
                        "total": 4,
                        "bestsellers": [{
                            "name": "龙虾鲜活大龙虾熟冻波士顿龙虾海鲜水产加拿大龙虾2只装750-800g",
                            "count": 1,
                            "link": "http://222.76.204.85:20501/mall//product/detail?id=6809fe3d88374820a5c1d3d70420dd4b"
                        }, {
                            "name": "海鲜水产新鲜多宝鱼鲜活石斑鱼比目鱼花岗鱼石江鱼菱鲆鱼野生海鱼",
                            "count": 1,
                            "link": "http://222.76.204.85:20501/mall//product/detail?id=e72d119ddd074230af04a5effd0ab199"
                        }, {
                            "name": "【老徽乡】安徽臭鳜鱼黄山特产臭桂鱼净膛8-9两 3条包邮 鳜鱼桂鱼",
                            "count": 1,
                            "link": "http://222.76.204.85:20501/mall//product/detail?id=89c0b73ca50a4cecb123d2a4026d3a0a"
                        }, {
                            "name": "肴易食 日本进口冰鲜金枪鱼刺身赤身150g 金枪鱼天身生鱼片吞拿鱼",
                            "count": 1,
                            "link": "http://222.76.204.85:20501/mall//product/detail?id=8974fc1309314d3a95e23c1d8eef86c7"
                        }, {
                            "name": "越南黑虎虾原装进口海鲜虾鲜活冷冻水产冻虾大虾包邮400g（20只）",
                            "count": 0,
                            "link": "http://222.76.204.85:20501/mall//product/detail?id=1c3c5f9735ec4a9c8c9b9dbab4767984"
                        }]
                    },
                    "trades": {
                        "amount": [{
                            "name": "海洋设备",
                            "amount": 0.0
                        }, {
                            "name": "冻品海鲜",
                            "amount": 0.0
                        }, {
                            "name": "生物医药",
                            "amount": 0.0
                        }, {
                            "name": "活体生鲜",
                            "amount": 168.2
                        }],
                        "quantity": [{
                            "name": "海洋设备",
                            "quantity": 2
                        }, {
                            "name": "冻品海鲜",
                            "quantity": 30
                        }, {
                            "name": "生物医药",
                            "quantity": 0
                        }, {
                            "name": "活体生鲜",
                            "quantity": 25
                        }],
                        "goods_count": 42,
                        "trade_amount": 0.3
                    },
                    "gathered": {
                        "shop_count": 4,
                        "goods_count": 42,
                        "trade_amount": 0.3,
                        "bestseller_count": 4
                    }
                }
            };
        },
        mounted() {
            this.initSwiper();
            this.getData();
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper (this.$refs.swiper, {
                    // loop: true,
                    effect: 'cube',
                    autoplay: {
                        // disableOnInteraction: false,
                        delay: 3000,
                        reverseDirection: true
                    }
                });
            },

            link_goto(url) {
                window.open(url);
            },

            getData() {
                var that = this;

                that.$http({
                    method: 'get',
                    url: '/ocean/panoramic/themeDataShow/industryBussiness'
                }).then(function (response) {
                    if (response.status === 1) {
                        that.$set(that, 'dataInfo', response.result);
                        // that.$set(that.dataInfo, 'sales', response.result.sales);
                        // that.$set(that.dataInfo, 'trades', response.result.trades);
                        // that.$set(that.dataInfo, 'gathered', response.result.gathered);
                    }
                }).catch(function (e) {

                })
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
                        height: 170px;
                        line-height: 16px;
                        .leida-box {
                            flex: 1;
                            background: url('./images/bowen-bg-1.png') no-repeat center;
                            background-size: 85% auto;
                            color: #17172f;
                            .title {
                                padding-top: 55px;
                            }
                            .value {}

                            &.box1 {
                                .title1 {
                                    padding-top: 55px;
                                }
                                .title2 {
                                    padding-top: 0px;
                                }
                            }
                            &.box2 { }
                        }
                    }

                    .leida-info-1 {
                        position: relative;
                        margin: 0px auto 0;
                        max-width: 300px;
                        height: 300px;
                        background: url('./images/bowen-bg-2.png') no-repeat center;
                        background-size: 100% auto;
                        color: #76e4ff;

                        .text-circle {
                            .title {
                                width: 100%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }

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
                                letter-spacing: 0px;
                                font-size: 13px;
                            }

                        }

                        .value1 {
                            position: absolute;
                            top: 45%;
                            left: -2%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.8);
                        }
                        .value2 {
                            position: absolute;
                            top: 6%;
                            left: 64%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.9);
                        }
                        .value3 {
                            position: absolute;
                            top: 5%;
                            left: 12%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value4 {
                            position: absolute;
                            top: 72%;
                            left: 15%;
                            padding: 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value5 {
                            position: absolute;
                            top: 65%;
                            left: 65%;
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
                            left: 74%;
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
                        max-width: 300px;
                        height: 300px;
                        background: url('./images/bowen-bg-3.png') no-repeat center;
                        /*background-size: 350px 350px;*/
                        background-size: 100% auto;
                        color: #76e4ff;

                        .text-circle {
                            .title {
                                width: 100%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }

                        .center-value {
                            position: absolute;
                            top: 42%;
                            width: 100%;
                            left: 0;
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
                            top: 9%;
                            left: 10%;
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
                            left: 62%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(0.9);
                        }
                        .value3 {
                            position: absolute;
                            top: 61%;
                            left: 85%;
                            padding: 12px 5px;
                            width: 62px;
                            height: 62px;
                            border: 1px solid #76e4ff;
                            border-radius: 50%;
                            transform:scale(1);
                        }
                        .value4 {
                            position: absolute;
                            top: 76%;
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
                            top: 65%;
                            left: 0%;
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