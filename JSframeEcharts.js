<script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
		
		var option = {  //重要的图形属性设置部分
			title: {text: 'ECharts 入门示例' }, //可选
			series: [{ //核心数据
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],
			itemStyle: { }  //设置通用样式，eg阴影、透明度、颜色、边框宽度等
			//itemStyle都会有normal和emphasis两个选项，
			//normal选项是正常展示下的样式，emphasis是鼠标 hover 时候的高亮样式。
			
			
			
			
			
		};
	
		// 使用刚指定的配置项和数据显示图表。
		//记得添加元素时在前一项加入 ,
        myChart.setOption(option);
		
		setOption({ //设置一些全局的量
				backgroundColor: '#2c343c'
				textStyle: {color:'rgba(255, 255, 255, 0.3)'}
					});
		
	</script>