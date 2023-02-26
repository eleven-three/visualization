<template>
  <div id="app">
    <dv-full-screen-container class="full-screen">
      <Title></Title>
      <Home></Home>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Title from "./components/title.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Title,
    Home,
  },
};
</script>

<style>
.full-screen {
  margin: 0 auto;
  padding: 0.25rem 0.25rem 0;
  background: url(./assets/images/bg.jpg) no-repeat 0 0 / cover;
}
</style>
