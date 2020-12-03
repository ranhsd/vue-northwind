import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import counter from "./modules/counter.module";
import customers from "./modules/customers.module";

const store = new Vuex.Store({
  modules: {
    counter,
    customers,
  },
});

export default store;
