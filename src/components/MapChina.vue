<template>
  <div style="width: 100%; height: 100%">
    <dv-flyline-chart-enhanced :config="config" :dev="true" class="seat">
    </dv-flyline-chart-enhanced>
    <div id="geo" class="geo seat"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { dataChina } from "../utils/Data";
import "../utils/china";
export default {
  name: "MapChina",
  components: {},
  props: {},
  data() {
    return {
      config: {
        points: [
          {
            name: "上海",
            coordinate: [0.72, 0.58],
            halo: {
              show: true,
            },
            icon: {
              src: require("../assets/images/mapCenterPoint.png"),
              width: 30,
              height: 30,
            },
            text: {
              show: false,
            },
          },

          {
            name: "北京",
            coordinate: [0.66, 0.4],
          },
        ],
        lines: [
          {
            source: "上海",
            target: "北京",
            color: "#fb7293",
            width: 2,
          },
        ],
        icon: {
          show: true,
          src: require("../assets/images/mapPoint.png"),
        },
        text: {
          show: true,
        },
        k: 0.5,
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.mapInit();
  },
  created() {},
  methods: {
    mapInit() {
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".geo"));
      const option = {
        tooltip: {
          //  鼠标移入时的提示信息
          // 类型
          tigger: "item",
          // b 区域名称 c 合并数值 a 系列名称
          formatter: "地区：{b}<br/>发送量：{c}",
        },
        series: [
          {
            type: "map", // 地图类型
            map: "china", // 地图名字（与导入文件名字一致
            layoutSize: 650,
            // label: {
            //   normal: {
            //     show: true,
            //     textStyle: {
            //       color: "#fff",
            //     },
            //   },
            // },
            itemStyle: {
              borderColor: "#b1b1b1",
            },
            data: dataChina,
            zoom: 1,
            emphasis: {
              lable: {
                color: "#fff",
                fontSize: "10px",
              },
              itemStyle: {
                areaColor: "#c7fffd",
              },
            },
          },
        ],
        visualMap: {
          type: "piecewise",
          bottom: "10%",
          pieces: [
            { min: 10000 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 1000, max: 9999 },
            { min: 100, max: 999 },
            { min: 0, max: 99 },
          ],

          textStyle: {
            color: "#fff",
          },
          inRange: {
            color: ["#fff", "#9999ff", "#7777ff", "#5555ff", "#3333ff"],
          },
          itemWidth: 10,
          itemHeight: 10,
          left: "10%",
        },
      };
      // 3. 把数据和配置给实例对象
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
.geo {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.seat {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
