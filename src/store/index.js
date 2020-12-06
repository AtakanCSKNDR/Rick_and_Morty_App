import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    info: [],
  },
  getters: {
    getData: (state) => {
      return state.data;
    },
    getInfo: (state) => {
      return state.info;
    },
  },
  mutations: {
    setEpisodes(state, payload) {
      state.info = payload.info;
      state.data = payload.results;
    },
    setEpisodeDetail(state, payload) {
      state.data = payload;
    },
    setCharacterDetail(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    getEpisodes(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${payload}`)
          .then((response) => {
            context.commit("setEpisodes", response.data);
            resolve(payload);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getEpisodeDetail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${payload}`)
          .then((response) => {
            context.commit("setEpisodeDetail", response.data);
            resolve(payload);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCharacterDetail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${payload}`)
          .then((response) => {
            context.commit("setCharacterDetail", response.data);
            resolve(payload);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
