import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      phone: "",
      neque: "",
      selectValue: ""
    },
    photo: null,
    signature: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPhoto(state, photo) {
      state.user = photo;
    },
    setSignature(state, signature) {
      state.user = signature;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setPhoto({ commit }, photo) {
      commit("setPhoto", photo);
    },
    setSignature({ commit }, signature) {
      commit("setSignature", signature);
    }
  }
});
