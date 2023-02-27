<template>
  <div class="right-center">
    <div class="right-center-pie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getRandom } from "../utils/index";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Operator",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    this.initEcharts();
  },
  created() {},
  methods: {
    initEcharts() {
      const rightCenterPie = document.querySelector(".right-center-pie");
      const myChart = echarts.init(rightCenterPie);
      // 基于准备好的dom，初始化echarts实例
      // 指定图表的配置项和数据
      const data1 = [];
      const data2 = [];
      const data3 = [];
      const data4 = [];
      const timeList = [];
      for (let i = 0; i <= 50; i++) {
        data1.push(getRandom(800, 1000));
        data2.push(getRandom(900, 1100));
        data3.push(getRandom(700, 900));
        data4.push(getRandom(600, 800));
        let date = new Date();
        date = new Date(+date - (1000 - i) * 1000);

        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        timeList.push(`${hour}:${minute}:${second}`);
      }
      let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["联通", "电信", "移动", "国际"],
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data1,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "联通",
            type: "line",
            symbol: "none",
            data: data1,
            smooth: true,
          },
          {
            name: "电信",
            type: "line",
            symbol: "none",
            data: data2,
            smooth: true,
          },
          {
            name: "移动",
            type: "line",
            symbol: "none",
            data: data3,
            smooth: true,
          },
          {
            name: "国际",
            type: "line",
            symbol: "none",
            data: data4,
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      // 动态添加数据
      setInterval(function () {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        timeList.shift();
        timeList.push(`${hour}:${minute}:${second}`);

        data1.shift();
        data1.push(data1[data1.length - 1] + getRandom(-5, 5));
        data2.shift();
        data2.push(data2[data2.length - 1] + getRandom(-5, 5));
        data3.shift();
        data3.push(data3[data3.length - 1] + getRandom(-5, 5));
        data4.shift();
        data4.push(data4[data4.length - 1] + getRandom(-5, 5));

        myChart.setOption({
          xAxis: {
            data: timeList,
          },
          series: [
            {
              data: data1,
            },
            {
              data: data2,
            },
            {
              data: data3,
            },
            {
              data: data4,
            },
          ],
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.right-center {
  width: 100%;
  height: 100%;
  display: flex;
}
.right-center .right-center-pie {
  width: 100%;
  height: 100%;
}
</style>
