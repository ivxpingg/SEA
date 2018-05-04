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

        <div class="custom-style-panel" v-if="isEdit">
            <div class="btn-icon btn-chart-type" @click="onChangeChartType"><i class="icon iconfont icon-tubiaoqiehuan"></i></div>
            <div class="btn-icon btn-style"><i class="icon iconfont icon-fengge"></i></div>
        </div>
    </div>
</template>

<script>
    import Echarts from 'echarts';
    import ChartOption from './chartOption';
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
                currentChartType: '',

                option: {}
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

                    this.typeList = this.chartInfo.picType.split(',');

                    if (!this.itemInfo.chartType) {
                        this.parentChartType(this.typeList[0]);
                    }
                }
            },
            itemInfo: {
                deep: true,
                handler(val, oldVal) {
                    this.currentChartType = val.chartType || '';
                }
            },

            currentChartType(val, oldVal) {
                if (val !== '') {
                    this.getChartData();
                }
            }
        },
        created() {
            if (this.itemInfo.chartType) {
                this.currentChartType = this.itemInfo.chartType;
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

                var chartType = this.currentChartType;

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

                var option = ChartOption.getOption(chartType, data);

                option.title.text = this.chartInfo.name;


                this.myChart.setOption(option);

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
        }

        .empty {
            position: relative;
            height: 100%;
            text-align: center;
            background-color: #cbcedc;

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
            height: 45px;
            bottom: 0px;
            left: 0px;
            text-align: left;
            background-color: #55a532;

            overflow: hidden;

            z-index: 10;

            .btn-icon {
                display: inline-block;
                width: 60px;
                text-align: center;
                cursor: pointer;
                .icon {
                    color: rgba(51,51,51, 0.7);
                    font-size: 30px;
                    line-height: 45px;

                    &:hover {
                        color: rgba(51,51,51, 1);
                    }
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