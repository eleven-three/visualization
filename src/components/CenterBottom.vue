<template>
  <div id="mapBottom"></div>
</template>

<script>
import * as echarts from "echarts";
import { getRandom } from "../utils/index";
export default {
  name: "CenterBottom",
  components: {},
  props: {},
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      myChart: null,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.initEcharts();
  },
  created() {},
  methods: {
    data1FN() {
      const time = new Date();
      const hour = time.getHours();
      if (!this.data1.length) {
        for (let i = 0; i <= hour; i++) {
          if (i > hour) {
            break;
          } else if (i < 8 && i >= 0) {
            this.data1.push(getRandom(200, 500));
          } else if (i === 9) {
            this.data1.push(getRandom(12000, 15000));
          } else if (i > 9 && i < 18) {
            this.data1.push(getRandom(50000, 60000));
          } else if (i > 18 && i < 20) {
            this.data1.push(getRandom(20000, 40000));
          } else if (i > 20 && i < 22) {
            this.data1.push(getRandom(5000, 20000));
          } else if (i > 22 && i < 24) {
            this.data1.push(getRandom(500, 3000));
          }
        }
      }
    },
    data2FN() {
      const time = new Date();
      const hour = time.getHours();
      if (!this.data2.length) {
        for (let i = 0; i <= hour; i++) {
          if (i > hour) {
            break;
          } else if (i < 8 && i >= 0) {
            this.data2.push(getRandom(10, 50));
          } else if (i === 9) {
            this.data2.push(getRandom(1200, 2000));
          } else if (i > 9 && i < 18) {
            this.data2.push(getRandom(5000, 6000));
          } else if (i > 18 && i < 20) {
            this.data2.push(getRandom(2000, 4000));
          } else if (i > 20 && i < 22) {
            this.data2.push(getRandom(500, 2000));
          } else if (i > 22 && i < 24) {
            this.data2.push(getRandom(50, 300));
          }
        }
      }
    },
    data3FN() {
      const time = new Date();
      const hour = time.getHours();
      if (!this.data3.length) {
        for (let i = 0; i <= hour; i++) {
          if (i > hour) {
            break;
          } else if (i < 8 && i >= 0) {
            this.data3.push(getRandom(1, 5));
          } else if (i === 9) {
            this.data3.push(getRandom(120, 200));
          } else if (i > 9 && i < 18) {
            this.data3.push(getRandom(500, 600));
          } else if (i > 18 && i < 20) {
            this.data3.push(getRandom(200, 400));
          } else if (i > 20 && i < 22) {
            this.data3.push(getRandom(50, 200));
          } else if (i > 22 && i < 24) {
            this.data3.push(getRandom(5, 30));
          }
        }
      }
    },
    initEcharts() {
      this.data1FN();
      this.data2FN();
      this.data3FN();
      this.myChart = echarts.init(document.getElementById("mapBottom"));
      const option = {
        xAxis: {
          data: [
            "00:00:00",
            "01:00:00",
            "02:00:00",
            "03:00:00",
            "04:00:00",
            "05:00:00",
            "06:00:00",
            "07:00:00",
            "08:00:00",
            "09:00:00",
            "10:00:00",
            "11:00:00",
            "12:00:00",
            "13:00:00",
            "14:00:00",
            "15:00:00",
            "16:00:00",
            "17:00:00",
            "18:00:00",
            "19:00:00",
            "20:00:00",
            "21:00:00",
            "22:00:00",
            "23:00:00",
          ],
          type: "category",
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ["成功提交量", "失败提交量", "未知提交量"],
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "成功提交量",
            type: "line",
            emphasis: {
              focus: "series",
            },
            data: this.data1,
          },
          {
            name: "失败提交量",
            type: "line",
            emphasis: {
              focus: "series",
            },
            data: this.data2,
          },
          {
            name: "未知提交量",
            type: "line",
            emphasis: {
              focus: "series",
            },
            data: this.data3,
          },
        ],
      };
      setInterval(() => {
        const time = new Date();
        const hour = time.getHours();
        if (this.data1.length !== hour) {
          if (hour < 9) {
            this.data1.push(getRandom(200, 500));
          } else if (hour > 9 && hour < 18) {
            this.data1.push(getRandom(50000, 60000));
          } else if (hour > 18 && hour < 20) {
            this.data1.push(getRandom(20000, 40000));
          } else if (hour > 20 && hour < 22) {
            this.data1.push(getRandom(5000, 20000));
          } else if (hour > 22 && hour < 24) {
            this.data1.push(getRandom(500, 3000));
          }
        }
        if (this.data2.length !== hour) {
          if (hour < 9) {
            this.data2.push(getRandom(20, 50));
          } else if (hour > 9 && hour < 18) {
            this.data2.push(getRandom(5000, 6000));
          } else if (hour > 18 && hour < 20) {
            this.data2.push(getRandom(2000, 4000));
          } else if (hour > 20 && hour < 22) {
            this.data2.push(getRandom(500, 2000));
          } else if (hour > 22 && hour < 24) {
            this.data2.push(getRandom(50, 300));
          }
        }
        if (this.data3.length !== hour) {
          if (hour < 9) {
            this.data3.push(getRandom(10, 20));
          } else if (hour > 9 && hour < 18) {
            this.data3.push(getRandom(500, 600));
          } else if (hour > 18 && hour < 20) {
            this.data3.push(getRandom(200, 400));
          } else if (hour > 20 && hour < 22) {
            this.data3.push(getRandom(50, 200));
          } else if (hour > 22 && hour < 24) {
            this.data3.push(getRandom(5, 30));
          }
        }
      }, 600000);
      this.myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#mapBottom {
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
