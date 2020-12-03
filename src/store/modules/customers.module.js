import { getCustomers as fetchCustomers } from "@/api";

const state = {
  updateCount: 0,
  customersList: [],
};

const mutations = {
  updateCustomers(state, payload) {
    state.customersList = payload;
    state.updateCount++;
  }
};

const getters = {};

const actions = {
  startTimer(context) {},

  async getCustomers(context, params) {
    const items = await fetchCustomers();
    context.commit("updateCustomers", items);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
