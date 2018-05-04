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
            }
        },
        watch: {
            id(val, oldVal) {
                var that = this;
                if (val !== "") {
                    this.getChartInfo();
                }
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
                console.dir(data);
                if (this.myChart) {
                    this.myChart.clear();
                }
                else {
                    this.myChart = Echarts.init(this.$refs.echart, 'shine');
                }

                data = this.chartInfo.picType === 'pie'? [{
                    name: '海洋百科',
                    value: 12
                },{
                    name: '生物百科',
                    value: 22
                },{
                    name: '贝类百科',
                    value: 12
                }] : data;

                var option = ChartOption.getOption(this.chartInfo.picType, data);

                option.title.text = this.chartInfo.name;

                console.dir(option);
                // var option = {
                //     xAxis: {
                //         type: 'category',
                //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                //     },
                //     yAxis: {
                //         type: 'value'
                //     },
                //     series: [{
                //         data: [120, 200, 150, 80, 70, 110, 130],
                //         type: that.chartInfo.picType
                //     },{
                //         data: [120, 200, 150, 80, 70, 110, 130],
                //         type: that.chartInfo.picType
                //     },{
                //         data: [120, 200, 150, 80, 70, 110, 130],
                //         type: that.chartInfo.picType
                //     },{
                //         data: [120, 200, 150, 80, 70, 110, 130],
                //         type: that.chartInfo.picType
                //     },{
                //         data: [120, 200, 150, 80, 70, 110, 130],
                //         type: that.chartInfo.picType
                //     }]
                // };

                this.myChart.setOption(option);

                setTimeout(function() {
                    that.imgSrc = that.myChart.getDataURL();
                }, 100);
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