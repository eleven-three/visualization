<template>
  <div class="title">
    <div class="titleLeft">
      <dv-decoration-8 style="width: 300px; height: 50px" />
    </div>
    <dv-decoration-11 class="centerTitle">中为聚旦数据概览</dv-decoration-11>
    <div class="titleRight">
      <dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  components: {},
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
.title {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 20px;
  height: 100px;
  align-items: center;
}
.title div:nth-child(1),
.title div:nth-child(3) {
  flex: 1;
}
.centerTitle {
  font-size: 30px;
  width: 600px;
}
.titleLeft,
.titleRight {
  display: flex;
  height: 50%;
  justify-content: end;
  align-items: center;
}
</style>
