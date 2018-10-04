import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    incrementCounter: (state, payload = 1) => {
      state.counter += payload;
    },
    decrementCounter: state => {
      state.counter -= 1;
    },
  },
  actions: {
    ...actions
  }
});

export default store;