store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userid: localStorage.getItem('userid') || null,
    tokenstring: localStorage.getItem('tokenstring') || null,
  },
  mutations: {
    setUserId(state, userid) {
      state.userid = userid;
      localStorage.setItem('userid', userid);
    },
    setTokenString(state, tokenstring) {
      state.tokenstring = tokenstring;
      localStorage.setItem('tokenstring', tokenstring);
    },
    clearUserData(state) {
      state.userid = null;
      state.tokenstring = null;
      localStorage.removeItem('userid');
      localStorage.removeItem('tokenstring');
    },
  },
  actions: {
    setUserId({ commit }, userid) {
      commit('setUserId', userid);
    },
    setTokenString({ commit }, tokenstring) {
      commit('setTokenString', tokenstring);
    },
    logout({ commit }) {
      commit('clearUserData');
    },
  },
  getters: {
    getToken: (state) => {
      const storedToken = localStorage.getItem('tokenstring');
      return state.tokenstring || (storedToken ? storedToken : null);
    },
    getID: (state) => {
      const id = localStorage.getItem('userid');
      return state.userid || (id ? id : null);
    },
  },
});