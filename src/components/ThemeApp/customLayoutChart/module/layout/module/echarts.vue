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
                    picType: '',
                    params: null
                },

                typeList: [],

                // 当前选中的图表类型
                // currentChartType: '',

                option: {},

                // 图表数据
                chartData: {},

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
                            that.chartInfo.params = response.result.params;
                            that.analysisData();
                        }
                    }).catch(function (e) {

                    });
                }
            },

            // 解析图表参数信息
            analysisData() {
                var that = this;
                if (that.chartInfo.params) {
                    that.chartInfo.params = eval('[' + that.chartInfo.params + ']')[0];
                }
                else {
                    that.chartInfo.params = {
                        echartsOption: {      // 图表参数
                            radar: {
                                indicator: []
                            }
                        },
                        sqlDataName: [],                  // sql语句对应的名称,顺序与SQL顺序一致
                        filterParamsName: ['时间','仪器'], // 筛选参数名称，顺序与参数SQL顺序一致
                        bar: {},                          // 对应需要图表需要的动态参数
                        line: {},                         // 对应需要图表需要的动态参数
                        pie: {},                          // 对应需要图表需要的动态参数
                        radar: {},                        // 对应需要图表需要的动态参数
                        scatter: {}                       // 对应需要图表需要的动态参数
                    };
                }

                // 判断是否有筛选的参数
                if (that.chartInfo.params.filterParamsName.length > 0) {
                    // do Something
                    // 渲染筛选条件，
                    // 获取之前保存的筛选条件，如果没有值则初始化筛选条件值。
                    //
                }

                that.initChart();

                // 设置图表的额外参数配置。
                // do Something

                that.getChartDataTest();
            },

            // 初始化图表对象，和基本option
            initChart() {
                var chartType = this.chartInfo.picType;
                if (this.myChart) {
                    this.myChart.clear();
                }
                else {
                    this.myChart = Echarts.init(this.$refs.echart, 'shine');
                }

                this.option = ChartOption[this.myChart] || {};
                this.option.title.text = this.chartInfo.name;

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
            getChartDataTest() {
                switch (this.chartInfo.picType) {
                    case 'line':
                    case 'bar':
                        this.chartData = {
                            SQL1: [{
                                time: '2018',
                                '个人': '100',
                                '高校机构': '200',
                                '企业单位': 102
                            }, {
                                time: '2019',
                                '个人': '100',
                                '高校机构': '200',
                                '企业单位': 102
                            }],
                            SQL2: [{
                                time: '2018',
                                '个人1': '100',
                                '高校机构1': '200',
                                '企业单位1': 102
                            },{
                                time: '2018',
                                '个人1': '100',
                                '高校机构1': '200',
                                '企业单位1': 102
                            }]
                        };
                        break;
                    case 'pie' : break;
                    case 'radar':

                        this.chartData = [{
                            name1: '仪器使用情况',
                            value1: 100,
                            value2: 200,

                        }];
                        break;
                    case 'scatter': break;
                }

                this.setChartData();
            },

            setChartData() {
                var dataOption = {};

                dataOption = ChartOption.getOption(this.chartInfo.picType, this.chartInfo.params, this.chartData);
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