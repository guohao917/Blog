import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    HAS_LOGIN: false,
    userInfo: {
      user: 'lanzi0905',
      password: '123456',
      token: 'admin',
    },
    youke: {
      user: '',
      password: '',
      token: 'youke'
    }
  },
  mutations: {
    SET_HAS_LOGIN (state, params) {
      state.userInfo.HAS_LOGIN = params
    }
  },
  actions: {
  },
  modules: {
  }
})
