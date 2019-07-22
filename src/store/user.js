export default {
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
      state.photo = photo;
    },
    setSignature(state, signature) {
      state.signature = signature;
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
};
