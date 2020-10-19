import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getDefaultState() {
  return {
    user: {},
    bundles: [],
    focusedBundle: {},
    newBundle: {},
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    set: function(state, payload) {
      Object.keys(payload).forEach(k => state[k] = payload[k])
    },
    reset: function(state) {
      Object.assign(state, getDefaultState())
    },
  },
})