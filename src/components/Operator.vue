<template>
  <div class="right-center">
    <div class="right-center-pie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
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
      for (let i = 0; i <= 300; i++) {
        data1.push(Math.floor(Math.random() * 1000));
        data2.push(Math.floor(Math.random() * 1000));
        data3.push(Math.floor(Math.random() * 1000));
        data4.push(Math.floor(Math.random() * 1000));
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
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "联通",
            type: "line",
            symbol: "none",
            data: data1,
          },
          {
            name: "电信",
            type: "line",
            stack: "总量",
            symbol: "none",
            data: data2,
          },
          {
            name: "移动",
            type: "line",
            stack: "总量",
            symbol: "none",
            data: data3,
          },
          {
            name: "国际",
            type: "line",
            stack: "总量",
            symbol: "none",
            data: data4,
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
        data1.push(Math.floor(Math.random() * 1000));
        data2.shift();
        data2.push(Math.floor(Math.random() * 1000));
        data3.shift();
        data3.push(Math.floor(Math.random() * 1000));
        data4.shift();
        data4.push(Math.floor(Math.random() * 1000));
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
