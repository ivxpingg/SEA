/**
 * echart 图表公共参数
 * @type {string}
 */
import Utils from '../../../../../../libs/utils';

var Theme = {
    "shine": {
        "seriesCnt": 4,
        "backgroundColor": "rgba(0,0,0,0)",
        "titleColor": "#333333",
        "subtitleColor": "#aaa",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            // "#c12e34",
            // "#e6b600",
            // "#0098d9",
            // "#2b821d",
            // "#005eaa",
            // "#339ca8",
            // "#cda819",
            // "#32a487"

            "#38a5db",
            "#3bc9e8",
            "#6be0df",
            "#ade5ae",
            "#ffd366",
            "#fe9685",
            "#f67199",
            "#e26eb6",
            "#e691d1",
            "#e1baf3",
            "#9f98f4",
            "#8378ea",
            "#97b8fc"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#1790cf",
            "#a2d4e6"
        ],
        "legendTextColor": "#333333",
        "kColor": "#c12e34",
        "kColor0": "#2b821d",
        "kBorderColor": "#c12e34",
        "kBorderColor0": "#2b821d",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#c12e34",
        "mapLabelColorE": "rgb(193,46,52)",
        "mapBorderColor": "#eeeeee",
        "mapBorderColorE": "#dddddd",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#dddddd",
        "mapAreaColorE": "rgba(230,182,0,1)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#06467c",
        "toolboxEmpasisColor": "#4187c2",
        "tooltipAxisColor": "#cccccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#005eaa",
        "timelineLineWidth": 1,
        "timelineItemColor": "#005eaa",
        "timelineItemColorE": "#005eaa",
        "timelineCheckColor": "#005eaa",
        "timelineCheckBorderColor": "rgba(49,107,194,0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#005eaa",
        "timelineControlBorderColor": "#005eaa",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#005eaa",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333333"
    }
};

var BaseOption = {
    title: {
        textStyle: {
            color: '#FFF',
            fontSize: 15
        },
        top: 10,
        left: 10,
        right: 'auto',
        bottom: 'auto'
    },
    legend: {
        textStyle: {
            color: '#FFF'
        },
        left: 'auto',
        top: 10,
        right: 10,
        bottom: 'auto',
        orient: 'horizontal'
    },
    grid: {},
    toolbox: {},
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        },
        axisTick: {
            lineStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }

    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        },
        axisTick: {
            lineStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        splitArea: {
            show: false
        }
    },
    tooltip: {
        show: true
    }
};

var Line = function () {
    return Utils.merge2.recursive(true, BaseOption, {
        xAxis: {},
        yAxis: {},
        series: []
    });
};

var Bar = function () {
    return Utils.merge2.recursive(true, BaseOption, {
        legend: {},
        grid: {},
        xAxis: {},
        yAxis: {},
        series: []
    });
}

var Pie = function () {
    return Utils.merge2.recursive(true, BaseOption, {
        legend: {
            left: 'auto',
            top: 'center',
            right: 10,
            bottom: 'auto',
            orient: 'vertical'
        },
        grid: {},
        xAxis: {
            show: false
        },
        yAxis: {
            show: false
        }
    });
}

var Radar = function () {
    return Utils.merge2.recursive(true, BaseOption, {
        legend: {
            left: 'auto',
            top: 'center',
            right: 10,
            bottom: 'auto',
            orient: 'vertical'
        },
        xAxis: {
            show: false
        },
        yAxis: {
            show: false
        },
        radar: {
            indicator: []
        },
        series: [{
            name: '',
            type: 'radar',
            data: []
        }]
    });
}

var WordCloud = function () {

    return {
        title: {
            textStyle: {
                color: '#FFF',
                fontSize: 15
            },
            top: 10,
            left: 10,
            right: 'auto',
            bottom: 'auto'
        },
        tooltip: {}
    };
}

//

// 图例切换参数
var LegendOption = [
    {
        legend: {
            show: true,
            left: 'auto',
            top: 10,
            right: 10,
            bottom: 'auto',
            orient: 'horizontal'
        }
    },
    {
        legend: {
            show: true,
            left: 'auto',
            top: 'center',
            right: 10,
            bottom: 'auto',
            orient: 'vertical'
        }
    },
    {
        legend: {
            show: true,
            left: 10,
            top: 'center',
            right: 'auto',
            bottom: 'auto',
            orient: 'vertical'
        }
    },
    {
        legend: {
            show: true,
            left: 'center',
            top: 'auto',
            right: 'auto',
            bottom: 10,
            orient: 'horizontal'
        }
    },
    {
        legend: {
            show: false
        }
    }
];

var TitleOption = [
    {
        title: {
            show: true,
            top: 10,
            left: 10,
            right: 'auto',
            bottom: 'auto'
        }
    },{
        title: {
            show: true,
            top: 10,
            left: 'center',
            right: 'auto',
            bottom: 'auto'
        }
    },{
        title: {
            show: false
        }
    }];


var GetOption = (type) => {
    switch (type) {
        case 'line': return Line(); break;
        case 'bar': return Bar(); break;
        case 'pie': return Pie(); break;
        case 'radar': return Radar(); break;
        case 'wordCloud': return WordCloud(); break;
    }
};

/**
 * 获取图表的数据展示信息
 * @param type {String}
 * @param configure {Object}
 * @param data {Array}
 * @returns {{legend: {data: Array}, series: Array}}
 * @constructor
 */
var GetDataOption = (type, configure,  data) => {

    var dataOption = {},
        legend_data = [],
        xAxis_data = [],
        series = [],
        series_data = {};

    var loop_idx = 1;
    

    if (type === 'line' || type === 'bar') {

        while (data['SQL' + loop_idx]) {
            if (loop_idx === 1) {
                // 拼接legend, series
                data.SQL1.forEach(function (val, idx) {
                    xAxis_data.push(val.time);
                });
            }

            var series_item = [];
            var key_value_data = {};

            data['SQL' + loop_idx].forEach(function (val, idx) {

                if (idx === 0) {
                    for (var key1 in val) {
                        if (key1 !== 'time') {
                            series_item.push({
                                name: key1,
                                type: type,
                                data: []
                            });

                            key_value_data[key1] = [];
                            legend_data.push(key1);
                        }
                    }
                }

                for (var key2 in val) {
                    if (key_value_data[key2]) {
                        key_value_data[key2].push(val[key2]);
                    }
                }
            });

            series_item.forEach(function (v, idx) {
                series_item[idx].data =  key_value_data[v.name];
            });


            series = series.concat(series_item);

            if (configure.xAxis && configure.xAxis.type === 'value') {
                dataOption = {
                    yAxis: {
                        data: xAxis_data
                    },
                    legend: {
                        data: legend_data
                    },
                    series: series
                };
            }
            else {
                dataOption = {
                    xAxis: {
                        data: xAxis_data
                    },
                    legend: {
                        data: legend_data
                    },
                    series: series
                };
            }


            ++loop_idx;
        }
    }

    else if (type === 'pie') {
        series[0] = {
            name: '',
            type: type,
            data: []
        };
        for (var key in data.SQL1[0]) {
            if(key === 'name') {
                series[0].name = data.SQL1[0][key];
            }
            else {
                series[0].data.push({
                    value: data.SQL1[0][key],
                    name: key
                });

                legend_data.push(key);
            }
        }

        dataOption = {
            legend: {
                data: legend_data
            },
            series: series
        };
    }

    else if (type === 'radar') {

        series.push({
            name: '',
            type: type,
            data: []
        });

        for (var key1 in data) {

            data[key1].forEach(function(val,idx) {

                legend_data.push(val.name);

                series[0].data.push({
                    name: val.name,
                    value: []
                });

                configure.radar.indicator.forEach(function (v) {
                    series[0].data[idx].value.push(val[v.name]);
                });

            });

        }

        dataOption = Utils.merge({
            legend: {
                data: legend_data
            },
            series: series
        });

    }

    else if (type === 'wordCloud') {

        series.push({
            name: '',
            type: type,
            size: ['80%', '80%'],
            sizeRange: [12, 60],
            rotationRange : [-90, 90],
            // textPadding: 0,
            shape: 'circle',
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: []
        });

        data.SQL1.forEach(function(val, idx) {
            series[0].data.push({
                name: val.name,
                value: val.value,
                textStyle: createRandomItemStyle(idx)
            });
        });

        dataOption = {
            series: series
        };
    }
    return dataOption;
}


var  createRandomItemStyle = function(idx) {

    var k = idx % Theme.shine.color.length;

    return {
        normal: {
            color: Theme.shine.color[k]
        }
    };

    // return {
    //     normal: {
    //         color: 'rgb(' + [
    //             Math.round(Math.random() * 160),
    //             Math.round(Math.random() * 160),
    //             Math.round(Math.random() * 160)
    //         ].join(',') + ')'
    //     }
    // };
}

export default {
    theme: Theme,
    getOption: GetOption,
    legendOption: LegendOption,
    titleOption: TitleOption,
    getDataOption: GetDataOption
}

