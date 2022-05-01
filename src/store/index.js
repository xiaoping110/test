import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createlogger from 'vuex/dist/logger'
import moduleA from './model/a'
Vue.use(Vuex)

const modules = {
  moduleA
}

const store = new Vuex.Store({
  modules,
  state: {
    global: {
      userInfo: {
        name: 'leo',
        age: 12
      },
      token: 'token'
    }
  },
  plugins: [
    createlogger(),
    createPersistedState({
    key:'$store'
  })
]
})

export default store
