<template>
  <div>
      <div id="question" style="width:100%;height:300px"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        option: {
            title: {
            text: "ECharts 入门示例"
            },
            tooltip: {},
            legend: {
            data: ["销量"]
            },
            xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
            {
                name: "销量",
                type: "line",
                data: [5, 20, 36, 10, 10, 20]
            }
            ]

        }
    }
},
methods: {
    drawPid(id) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("question"));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPid("main");
    });
  }
}
</script>

<style>

</style>