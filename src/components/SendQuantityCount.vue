<template>
  <div class="sales">
    <div class="inner">
      <div class="caption">
        <h3>发送量统计</h3>
        <a
          href="javascript:;"
          @click="yearBtn"
          :class="[activeIndex === 0 ? 'active' : '']"
          >年</a
        >
        <a
          href="javascript:;"
          @click="quarterBtn"
          :class="[activeIndex === 1 ? 'active' : '']"
          >季</a
        >
        <a
          href="javascript:;"
          @click="monthBtn"
          :class="[activeIndex === 2 ? 'active' : '']"
          >月</a
        >
      </div>
      <div class="chart">
        <div class="label">单位:万</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getRandom } from "../utils/index";
export default {
  name: "SendQuantityCount",
  components: {},
  props: {},
  data() {
    return {
      rightData: {
        year: [],
        quarter: [],
        month: [],
      },
      activeIndex: 0,
      monthDay: [],
      mont: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      ).getDate(),
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
    yearBtn() {
      this.activeIndex = 0;
      let option = {
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "发送总量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: this.rightData.year,
          },
        ],
      };
      this.myChart.setOption(option);
    },
    quarterBtn() {
      this.activeIndex = 1;
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["第一季度", "第二季度", "第三季度", "第四季度"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.rightData.quarter,
            type: "bar",
            showBackground: true,
          },
        ],
      };
      this.myChart.setOption(option);
    },
    monthBtn() {
      this.activeIndex = 2;
      let option = {
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.monthDay,
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "发送总量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: this.rightData.month,
          },
        ],
      };
      this.myChart.setOption(option);
    },
    yearFN() {
      const time = new Date();
      const year = time.getMonth() + 1;
      if (year === this.rightData.year.length) return;
      for (let i = 0; i < year; i++) {
        if (this.rightData.year.length < year) {
          this.rightData.year.push(getRandom(4000, 6000));
        }
      }
    },
    quarterFN() {
      const time = new Date();
      const month = time.getMonth() + 1;
      const quarter = month < 3 ? 1 : Math.floor(month / 3);
      if (quarter === this.rightData.quarter.length) return;
      for (let i = 0; i <= quarter; i++) {
        if (i !== quarter && this.rightData.quarter.length < quarter) {
          this.rightData.quarter.push(getRandom(15000, 20000));
        }
      }
    },
    monthFN() {
      const time = new Date().getDate();
      for (let i = 0; i < time; i++) {
        if (i !== time && this.rightData.month.length < time) {
          this.rightData.month.push(getRandom(80, 100));
        }
      }
    },
    initEcharts() {
      for (let i = 1; i <= this.mont; i++) {
        this.monthDay.push(i + "日");
      }
      this.monthFN();
      this.yearFN();
      this.quarterFN();
      setInterval(() => {
        const time = new Date().getMonth() + 1;
        const quarter = time < 3 ? 1 : Math.floor(time / 3);
        if (time < this.rightData.year.length) {
          this.rightData.year.push(getRandom(4000, 6000));
        } else if (quarter < this.rightData.quarter.length) {
          this.rightData.quarter.push(getRandom(15000, 20000));
        } else if (new Date().getDate() < this.rightData.month.length) {
          this.rightData.month.push(getRandom(80, 100));
        }
      }, 60000);
      this.myChart = echarts.init(document.querySelector(".line"));
      // 2. 指定配置和数据
      // 3. 把配置和数据给实例对象
      let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "发送总量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: this.rightData.year,
          },
        ],
      };
      this.myChart.setOption(option);
      setInterval(() => {
        this.activeIndex++;
        if (this.activeIndex >= 3) this.activeIndex = 0;
        if (this.activeIndex === 0) {
          this.yearBtn();
        } else if (this.activeIndex === 1) {
          this.quarterBtn();
        } else if (this.activeIndex === 2) {
          this.monthBtn();
        }
      }, 2000);
    },
  },
};
</script>

<style scoped>
.sales {
  height: 100%;
  margin: 20px;
}
.sales .caption {
  display: flex;
  line-height: 1;
}
.sales h3 {
  height: 21px;
  line-height: 21px;
  font-size: 20px;
  padding-right: 20px;
  border-right: 1px solid #00f2f1;
}
.sales a {
  padding: 5px;
  font-size: 16px;
  margin: -4px 0 0 25px;
  border-radius: 5px;
  color: #0bace6;
}
.sales a.active {
  background-color: #4c9bfd;
  color: #fff;
}
.sales .inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sales .chart {
  flex: 1;
  padding-top: 0.1875rem;
  position: relative;
  height: 100%;
}
.sales .label {
  position: absolute;
  left: 0.225rem;
  top: 0.225rem;
  color: #4996f5;
  font-size: 0.175rem;
}
.line {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
</style>
