<template>
  <dv-active-ring-chart :config="config" style="width: 200px; height: 200px" />
</template>

<script>
export default {
  name: "LeftBottom",
  components: {},
  props: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "AA",
            value: 55,
          },
          {
            name: "BB",
            value: 120,
          },
          {
            name: "CC",
            value: 78,
          },
          {
            name: "DD",
            value: 66,
          },
        ],
        activeTimeGap: 1000,
        lineWidth: 30,
        radius: "60%",
        activeRadius: "70%",
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
