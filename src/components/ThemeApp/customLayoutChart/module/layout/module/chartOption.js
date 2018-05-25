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
    }
};

var Line = Utils.merge(BaseOption, {
    xAxis: {},
    yAxis: {},
    series: []
});

var Bar = Utils.merge(BaseOption, {
    legend: {},
    xAxis: {},
    yAxis: {},
    series: []
});

var Pie = Utils.merge(BaseOption, {
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
    series: []
});

var Radar = Utils.merge(BaseOption, {
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


var GetOption = (type, data, params) => {
    var option;

    var legend_data = [],
        xAxis_data = [],
        series = [],
        series_data = {};

    switch(type) {
        case 'line': option = Line; break;
        case 'bar': option = Bar; break;
        case 'pie': option = Pie; break;
        default: option = null; break;
    }

    if (!option) { return null; }

    if (!Utils.isArray(data)) { return option; }

    if (type === 'line' || type === 'bar') {

        data.forEach(function(val, idx) {
            xAxis_data.push(val.time);


            for(let key1 in val) {
                if (idx === 0 && key1 !== 'time') {
                    legend_data.push(key1);
                    series_data[key1] = [];
                }
            }

            for(let key2 in val) {
                if (key2 !== 'time') {
                    series_data[key2].push(val[key2] || 0);
                }
            }

        });

        for(let name in series_data) {
            series.push({
                name: name,
                type: type,
                data: series_data[name]
            });
        }

        option.legend.data = legend_data;
        option.xAxis.data = xAxis_data;
        option.series = series;

    }

    else if (type === 'pie') {
        series = [{
            type: type,
            data: []
        }];

        data.forEach(function(val, idx) {
            legend_data.push(val.name);
            series[0].data.push({
                name: val.name,
                value: val.value
            });
        });

        option.legend.data = legend_data;
        option.series = series;
    }

    else {}
    // console.dir(option);
    return option;
};


export default {
    theme: Theme,
    line: Utils.merge(BaseOption, Line),
    bar: Utils.merge(BaseOption, Bar),
    pie: Utils.merge(BaseOption, Pie),
    getOption: GetOption,
    legendOption: LegendOption,
    titleOption: TitleOption
}

