<template>
  <div class="home-box">
    <!-- 左 -->
    <div class="row">
      <dv-border-box-8>
        <div class="box">
          <daySendTotal></daySendTotal>
        </div>
      </dv-border-box-8>
      <dv-border-box-1>
        <div class="box">
          <Operator></Operator>
        </div>
      </dv-border-box-1>
      <dv-border-box-1>
        <div class="box leftBottom">
          <LeftBottom></LeftBottom>
        </div>
      </dv-border-box-1>
    </div>
    <!-- 中 -->
    <div class="row">
      <div class="middle-content">
        <dv-border-box-11 title="全国发送">
          <div class="box">
            <MapChina></MapChina>
          </div>
        </dv-border-box-11>
        <div class="middle-content-bottom">
          <CenterBottom></CenterBottom>
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="row">
      <dv-border-box-1>
        <div class="box">
          <RightTopVue></RightTopVue>
        </div>
      </dv-border-box-1>
      <dv-border-box-1>
        <div class="box">
          <SendQuantityCount></SendQuantityCount>
        </div>
      </dv-border-box-1>
      <dv-border-box-1>
        <div class="box">
          <div class="right-bottom-title">各行业发送情况</div>
          <IndustrySend></IndustrySend>
        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
import RightTopVue from "./RightTop.vue";
import LeftBottom from "./LeftBottom.vue";
import Operator from "./Operator.vue";
import daySendTotal from "./daySendTotal.vue";
import MapChina from "./MapChina.vue";
import IndustrySend from "./IndustrySend.vue";
import SendQuantityCount from "./SendQuantityCount.vue";
import CenterBottom from "./CenterBottom.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Operator,
    daySendTotal,
    MapChina,
    IndustrySend,
    SendQuantityCount,
    CenterBottom,
    RightTopVue,
    LeftBottom,
  },

  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.home-box {
  display: flex;
  width: 100%;
  height: 89vh;
  font-size: 12px;
}
.home-box .row {
  flex: 3;
  margin: 0 10px;
}
.home-box .row:nth-child(1),
.home-box .row:nth-child(3) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.home-box .row:nth-child(2) {
  flex: 4;
  margin: unset;
}
.home-box .row .box {
  padding: 20px;
  width: 100%;
  height: 100%;
}
.dv-border-box-1,
.dv-border-box-8 {
  margin: 15px 0 0;
}
.middle-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.middle-content .dv-border-box-11 {
  flex: 6;
}
.middle-content-bottom {
  margin-top: 5px;
  flex: 3;
}
.right-bottom-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.leftBottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
