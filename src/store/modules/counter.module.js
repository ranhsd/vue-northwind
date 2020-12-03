const state = {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  incrementWithParams(state, payload) {},
};

const getters = {
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
      context.commit("increment");
    }, 1000);
  },
};


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};