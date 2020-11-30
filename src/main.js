import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "./css/style.css";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementWithParams(state, payload) {},
  },
  getters: {
    counterSquare: (state) => {
      return state.count * state.count;
    },
  },
  actions: {
    incrementAfter5Seconds(context, intervalInSeconds) {
      setTimeout(() => {
        context.commit("increment");
      }, intervalInSeconds * 1000);
    },
    startTimer(context) {
      setInterval(() => {
        debugger;
        context.commit("increment");
      }, 1000);
    },
  },
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
