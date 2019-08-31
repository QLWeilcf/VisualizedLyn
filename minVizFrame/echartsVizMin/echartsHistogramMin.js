//柱状图
	var myChart = echarts.init(document.getElementById('container'));
	var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
		/*
		setOption({ //设置一些全局的量
				backgroundColor: '#2c343c'
				textStyle: {color:'rgba(255, 255, 255, 0.3)'}
					});
					*/