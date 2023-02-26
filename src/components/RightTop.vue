<template>
  <dv-capsule-chart
    :config="config"
    style="width: 100%; height: 100%; padding: 20px"
  />
</template>

<script>
export default {
  name: "rightTop",
  components: {},
  props: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "AAA",
            value: 167,
          },
          {
            name: "BBB",
            value: 123,
          },
          {
            name: "CCC",
            value: 98,
          },
          {
            name: "DDD",
            value: 75,
          },
          {
            name: "XXX",
            value: 66,
          },
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        showValue: true,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped></style>
