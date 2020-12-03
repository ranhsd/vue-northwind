import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store  from './store';
import { data as dataProvider } from './data';


import "./css/style.css";

Vue.config.productionTip = false;


Vue.prototype.$dataProvider = dataProvider;

Vue.use(Vuex);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
