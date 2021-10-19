import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import callForm from './module/callForm';

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules:{
    call: callForm
  }
})

export default store