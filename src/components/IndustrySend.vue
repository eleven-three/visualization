<template>
  <div class="main"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "IndustrySend",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    this.IndustrySend();
  },
  created() {},
  methods: {
    IndustrySend() {
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".main"));
      // 2. 指定配置和数据
      var option = {
        color: new echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: "#00fffb" }, // 0 起始颜色
            { offset: 1, color: "#0061ce" }, // 1 结束颜色
          ]
        ),
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "0%",
          right: "3%",
          bottom: "3%",
          top: "3%",
          //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
          containLabel: true,
          // 是否显示直角坐标系网格
          show: true,
          //grid 四条边框的颜色
          borderColor: "rgba(0, 240, 255, 0.3)",
        },
        xAxis: [
          {
            type: "category",
            data: ["物流", "交通", "政企", "金融"],
            axisTick: {
              alignWithLabel: false,
              // 把x轴的刻度隐藏起来
              show: false,
            },
            axisLabel: {
              color: "#4c9bfd",
            },
            // x轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
                // width: 3
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              alignWithLabel: false,
              // 把y轴的刻度隐藏起来
              show: false,
            },
            axisLabel: {
              color: "#4c9bfd",
            },
            // y轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
                // width: 3
              },
            },
            // y轴分割线的颜色样式
            splitLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [2100, 1900, 1700, 1560],
          },
        ],
      };
      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
