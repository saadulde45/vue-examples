import Vue from 'vue'
import Vuex from 'vuex'

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
    incrementCounter: state => {
      state.counter += 1;
    },
    decrementCounter: state => {
      state.counter -= 1;
    },
  }
});

export default store;