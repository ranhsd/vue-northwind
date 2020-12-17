import { getField, updateField } from "vuex-map-fields";

const state = {
  count: 0,
  count2: 1,
  count3: 3
};

const mutations = {
  // increment(state) {
  //   state.count++;
  // },
  // decrement(state) {
  //   state.count--;
  // },
  // incrementWithParams(state, payload) {},
  updateField,
};

const getters = {
  getField,
  counterSquare: (state) => {
    return state.count * state.count;
  },
};

const actions = {
  incrementAfter5Seconds(context, intervalInSeconds) {
    setTimeout(() => {
      context.commit("increment");
    }, intervalInSeconds * 1000);
  },
  startTimer(context) {
    alert("start timer counter");
    setInterval(() => {
      context.commit("updateField", {
        path: "count",
        value: context.state.count + 1,
      });
    }, 1000);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
