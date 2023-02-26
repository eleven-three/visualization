import Vue from "vue";
import App from "./App.vue";
import "./Style/index.css";
import "./rem";
import dataV from "@jiaminghi/data-view";

Vue.use(dataV);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
