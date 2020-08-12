import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo: {
      data: {
        username: 'admin',
        password: '123456'
      },
      status: 200
    },
    token: localStorage.getItem('token') || '',
    currentPage: 1
  },
  mutations: {
    changeCurrentPage(state, val) {
      state.currentPage = val
    }
  },
  actions: {},
  modules: {}
})
