//对点的可视化
var dom = document.getElementById("container");
var myChart = echarts.init(dom); // 基于准备好的dom，初始化echarts实例
var app = {};
option = null;
//需要是百度的bd-09坐标系
var geoCoordMap = {
	"安庆":[117.0703403,30.54914865],
	"安阳":[114.3988879,36.10352858],
	"巴彦淖尔":[107.3940563,40.749469],
	"巴音郭楞":[86.15171188,41.77030244],
	"蚌埠":[117.3962358,32.92229729],
	"滨海新区":[117.7168968,39.0099715],
	"沧州":[116.8454156,38.31028952],
	"昌平":[116.2378212,40.22637538],
	"朝阳":[120.4568757,41.57974314],
	"大理":[100.2742214,25.61221215],
	"大连":[121.6213129,38.91965817],
	"大兴":[116.3480206,39.7325832],
	"东城":[116.4402984,39.89988553],
	"东营":[118.6811537,37.44109211],
	"丰台":[116.300281,39.86137662],
	"赣州":[114.9415283,25.83792311],
	"广州":[113.2708668,23.13539105],
	"哈尔滨":[126.5415819,45.80940205],
	"海淀":[116.276514,39.95927588],
	"杭州":[120.1616128,30.2799942],
	"合肥":[117.2336811,31.82686667],
	"河池":[108.0917599,24.69884696],
	"河西":[117.2062093,39.10814181],
	"虹口":[121.4978092,31.25128184],
	"吉林":[125.33257,43.9022505],
	"嘉兴":[120.7620311,30.7520312],
	"江北":[106.4546092,29.9696492],
	"江门":[113.0884568,22.58454328],
	"晋城":[112.8584088,35.49638695],
	"景德镇":[117.1849958,29.27448199],
	"兰州市":[103.8408261,36.06701904],
	"漯河":[114.0229579,33.58762894],
	"南充":[106.1171992,30.84378072],
	"南京":[118.803299,32.06661118],
	"南宁":[108.3729937,22.82331141],
	"宁波":[121.5567731,29.88087381],
	"盘锦":[122.0772022,41.12597778],
	"浦东新区":[121.5508324,31.22777081],
	"黔东南":[107.9906424,26.58981838],
	"青岛":[120.3890914,36.07321569],
	"衢州":[118.8660535,28.97572492],
	"泉州":[118.6821214,24.88048294],
	"沙坪坝":[106.4668415,29.56216545],
	"厦门":[118.0958602,24.48614496],
	"深圳":[114.06442,22.54875596],
	"沈阳":[123.4380904,41.81139691],
	"石家庄":[114.521393,38.04822324],
	"绥化":[126.9752435,46.66017865],
	"温州":[120.7058454,28.00044195],
	"文山":[104.2393434,23.39355233],
	"无锡":[120.3184953,31.49687826],
	"武汉":[114.3119733,30.59876683],
	"西安":[108.9466389,34.34773942],
	"西城":[116.3894971,39.88922559],
	"信阳":[114.0975057,32.15299791],
	"徐州":[117.2906989,34.21153254],
	"扬州":[119.4193846,32.40048724],
	"伊春":[128.8476924,47.73335629],
	"宜宾":[104.6496188,28.75807443],
	"宜春":[114.4233417,27.8212761],
	"渝北":[106.6201701,29.72129404],
	"运城":[111.0139185,35.03271556]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};
option = {
    backgroundColor: '#404a59',
    title: {
        text: 'wechat data',
        subtext: 'data from WeChat',
        sublink: 'https://github.com/QLWeilcf',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['wec'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 5,
        splitNumber: 5,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: 'wec',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
			{name:"安庆", value:1},
			{name:"安阳", value:1},
			{name:"巴彦淖尔", value:1},
			{name:"巴音郭楞", value:1},
			{name:"蚌埠", value:1},
			{name:"滨海新区", value:2},
			{name:"沧州", value:1},
			{name:"昌平", value:2},
			{name:"朝阳", value:4},
			{name:"大理", value:1},
			{name:"大连", value:3},
			{name:"大兴", value:1},
			{name:"东城", value:2},
			{name:"广州", value:2},
			{name:"哈尔滨", value:1},
			{name:"海淀", value:5},
			{name:"杭州", value:3},
			{name:"合肥", value:1},
			{name:"河池", value:2},
			{name:"河西", value:1},
			{name:"景德镇", value:1},
			{name:"兰州市", value:1},
			{name:"漯河", value:1},
			{name:"南充", value:1},
			{name:"南京", value:1},
			{name:"南宁", value:2},
			{name:"宁波", value:1},
			{name:"盘锦", value:1},
			{name:"浦东新区", value:2},
			{name:"黔东南", value:1},
			{name:"绥化", value:1},
			{name:"温州", value:2},
			{name:"文山", value:1},
			{name:"无锡", value:2},
			{name:"武汉", value:2},
			{name:"西安", value:3},
			{name:"西城", value:2},
			{name:"信阳", value:1},
			{name:"徐州", value:1},
			{name:"扬州", value:1},
			{name:"伊春", value:1},
			{name:"运城", value:1}
			]),
            symbolSize: function (val) {
				var vw=4+3*val[2]
                return vw;
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
       