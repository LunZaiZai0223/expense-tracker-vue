import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Line } from "vue-chartjs";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // Line,
  render: (h) => h(App),
}).$mount("#app");
