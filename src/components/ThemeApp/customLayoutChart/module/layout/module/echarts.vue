<template>
    <div class="echarts-container">
        <div class="echart-panel" v-if="id !== ''" ref="echart">

        </div>
        <div class="empty" v-else>
            <i class="icon iconfont icon-tianjia"></i>
        </div>
        <div class="echart-image">
            <img :src="imgSrc" alt="">
        </div>

        <div class="custom-style-panel" v-if="isEdit && id !== ''">
            <!--<div class="btn-icon btn-chart-type" @click="onChangeChartType"><i class="icon iconfont icon-tubiaoqiehuan"></i></div>-->
            <!--<div class="btn-icon btn-style"><i class="icon iconfont icon-fengge"></i></div>-->
            <Button type="text" icon="android-apps" size="small" @click="onClick_titlePosition">标题位置</Button>
            <Button type="text" icon="android-apps" size="small" @click="onClick_legendPosition">图例位置</Button>
        </div>
    </div>
</template>

<script>
    import Echarts from 'echarts';
    import ChartOption from './chartOption';
    import Utils from '../../../../../../libs/utils';
    export default {
        name: "echarts",
        data() {
            return {
                myChart: null,
                imgSrc: '',
                chartInfo: {
                    name: '',
                    picType: ''
                },

                typeList: [],

                // 当前选中的图表类型
                // currentChartType: '',

                option: {},

                // 图表标题对应 chartOption的标题位置参数的索引值
                titlePostionIndex: 0,
                legendPostionIndex: 0,
            };
        },
        props: {
            // 数据库唯一标识，用于获取数据。
            id: {
                type: String,
                default() {
                    return '';
                }
            },

            isEdit: {
                type: Boolean,
                default(){
                    return false;
                }
            },
            // 图表的具体信息
            itemInfo: {
                type: Object,
                default() {
                    return {};
                }
            }

        },
        watch: {
            id(val, oldVal) {
                var that = this;
                if (val !== "") {

                    this.getChartInfo();
                }
            },
            chartInfo: {
                deep: true,
                handler(val, oldVal) {

                    // this.typeList = this.chartInfo.picType.split(',');
                    //
                    // if (!this.itemInfo.chartType) {
                    //     this.parentChartType(this.typeList[0]);
                    // }
                }
            },
            itemInfo: {
                deep: true,
                handler(val, oldVal) {
                    // this.currentChartType = val.chartType || '';
                }
            }

            // currentChartType(val, oldVal) {
            //     if (val !== '') {
            //         this.getChartData();
            //     }
            // }
        },
        created() {
            if (this.itemInfo.chartType) {
                // this.currentChartType = this.itemInfo.chartType;
            }
        },
        mounted() {

            Echarts.registerTheme("shine", ChartOption.theme.shine);

            if (this.id !== ''){
                this.getChartInfo();
            }
        },
        methods: {
            getChartInfo() {
                var that = this;
                if (this.id !== '') {
                    this.$http({
                        url: '/ocean/theme/microanalysis/detail',//query
                        method: 'get',
                        params: {
                            id: that.id
                        }
                    }).then(function(response) {
                        if(response.status === 1) {
                            that.chartInfo.name = response.result.name;
                            that.chartInfo.picType = response.result.picType;
                            that.getChartData();
                        }
                    }).catch(function (e) {

                    });
                }
            },
            getChartData() {
                var that = this;
                if (this.id !== '') {
                    this.$http({
                        url: '/ocean/theme/microanalysis/query',
                        method: 'get',
                        params: {
                            id: that.id
                        }
                    }).then(function(response) {
                        if(response.status === 1) {
                            that.setEchart(response.result);
                        }
                    }).catch(function (e) {

                    });
                }
            },
            setEchart(data) {
                var that = this;

                var chartType = this.chartInfo.picType;//this.currentChartType;

                if (this.myChart) {
                    this.myChart.clear();
                }
                else {
                    this.myChart = Echarts.init(this.$refs.echart, 'shine');
                }

                data = chartType === 'pie'? [{
                    name: '海洋百科',
                    value: 12
                },{
                    name: '生物百科',
                    value: 22
                },{
                    name: '贝类百科',
                    value: 12
                }] : data;

                this.option = ChartOption.getOption(chartType, data);


                this.option = Utils.merge(this.option, this.itemInfo.chartOption);

                this.option.title.text = this.chartInfo.name;


                this.myChart.setOption(this.option);

                setTimeout(function() {
                    that.imgSrc = that.myChart.getDataURL();
                }, 100);
            },

            // 更改图表类型
            onChangeChartType() {
                var idx = this.typeList.indexOf(this.currentChartType);

                if (idx === (this.typeList.length - 1)) {
                    this.parentChartType(this.typeList[0]);
                }
                else {
                    this.parentChartType(this.typeList[idx + 1]);
                }

            },

            // 通知父组件更改图表类型
            parentChartType(type) {
                this.currentChartType = type;
                this.$emit('sub_chartType', type, this.itemInfo);
            },

            // 图表标题位置
            onClick_titlePosition() {

                var that = this,
                    titleOption = ChartOption.titleOption;

                var isSame = true;
                this.titlePostionIndex = this.titlePostionIndex >= (titleOption.length - 1) ? 0 : (this.titlePostionIndex + 1);

                if (titleOption.length === 1) {

                    return;
                }

                if (!Utils.isUndefined(this.itemInfo.chartType.title)) {
                    for(let key in this.itemInfo.chartType.title) {
                        if (this.itemInfo.chartType.title[key] !== titleOption[this.titlePostionIndex][key]) {
                            isSame = false;
                        }
                    }
                }
                else {
                    isSame = false;
                }

                if (isSame) {
                    this.titlePostionIndex = this.titlePostionIndex >= (titleOption.length - 1) ? 0 : (this.titlePostionIndex + 1);
                }

                this.option = Utils.merge(this.option, titleOption[this.titlePostionIndex]);

                this.myChart.setOption(this.option);

                setTimeout(function() {
                    that.imgSrc = that.myChart.getDataURL();
                }, 100);

                this.$emit('sub_layoutData','chartOption', titleOption[this.titlePostionIndex], this.itemInfo);
            },
            onClick_legendPosition() {

                var that = this,
                    legendOption = ChartOption.legendOption;

                var isSame = true;
                this.legendPostionIndex = this.legendPostionIndex >= (legendOption.length - 1) ? 0 : (this.legendPostionIndex + 1);

                if (legendOption.length === 1) {

                    return;
                }

                if (!Utils.isUndefined(this.itemInfo.chartType.title)) {
                    for(let key in this.itemInfo.chartType.title) {
                        if (this.itemInfo.chartType.title[key] !== legendOption[this.legendPostionIndex][key]) {
                            isSame = false;
                        }
                    }
                }
                else {
                    isSame = false;
                }

                if (isSame) {
                    this.legendPostionIndex = this.legendPostionIndex >= (legendOption.length - 1) ? 0 : (this.legendPostionIndex + 1);
                }

                this.option = Utils.merge(this.option, legendOption[this.legendPostionIndex]);

                this.myChart.setOption(this.option);

                setTimeout(function() {
                    that.imgSrc = that.myChart.getDataURL();
                }, 100);

                this.$emit('sub_layoutData','chartOption', legendOption[this.legendPostionIndex], this.itemInfo);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .echarts-container {
        position: relative;
        height: 100%;

        .echart-panel {
            height: 100%;
            /*background-color: #FFF;*/
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 20px;
        }

        .empty {
            position: relative;
            height: 100%;
            text-align: center;
            background-color: rgba(220,220,220, 0.6);
            border-radius: 20px;

            .iconfont {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -75px;
                margin-left: -50px;
                font-size: 100px;
            }
        }

        .custom-style-panel {
            position: absolute;
            height: 26px;
            bottom: 0px;
            left: 0;
            right: 0;
            text-align: left;
            background-color: rgba(255,255,255, 0.2);
            border-radius: 0 0 20px 20px;
            overflow: hidden;
            z-index: 10;

            .ivu-btn {
                margin-left: 10px;
                color: rgba(255,255,255,0.6);
                border-width: 0;
                box-shadow: none;

                &:hover {
                    color: #FFF;
                }
            }
        }
    }

    .echart-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        background-color: #FFF;

        > img {
            width: 100%;
            height: 100%;
        }
    }
</style>