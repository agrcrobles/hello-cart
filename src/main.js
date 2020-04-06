// import 'babel-polyfill'
import Vue from "vue";
import RouterApp from "./RouterApp.vue";
import store from "./store";
import { currency } from "./currency";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.filter("currency", currency);

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(RouterApp),
});
// }).$mount("#app");
