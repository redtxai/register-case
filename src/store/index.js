import Vue from "vue";
import Vuex from "vuex";

import user from "./user.js";
import cache from "./cache.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    cache
  },
  actions: {
    setLogo({ commit }, logo) {
      commit("setLogo", logo);
    },
    setDefaultState({ commit }) {
      commit("setDefaultState");
    }
  },
  getters: {
    getLogo: state => {
      return state.cache.logo;
    }
  }
});
