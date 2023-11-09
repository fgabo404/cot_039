import { createStore } from "vuex";

export default createStore({
  state: {
    user: undefined,
  },
  mutations: {
    //Login
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    //Login

  },
  modules: {},
  plugins: [],
});
