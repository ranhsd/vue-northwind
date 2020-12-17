import { getCustomers as fetchCustomers } from "@/api";
import { getField, updateField } from "vuex-map-fields";

const state = {
  updateCount: 0,
  customersList: [],
};

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const actions = {
  startTimer(context) {},

  async getCustomers(context, params) {

    const items = await fetchCustomers();

    context.commit("updateField", {
      path: "customersList",
      value: items,
    });

    context.commit("updateField", {
      path: "updateCount",
      value: state.updateCount + 1,
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
