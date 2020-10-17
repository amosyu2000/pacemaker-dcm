import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getDefaultState() {
  return {
    user: {},
    bundles: [],
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    setUser: function(state, json) {
      state.user = json
    },
    setBundles: function(state, array) {
      state.bundles = array
    },
    reset: function(state) {
      Object.assign(state, getDefaultState())
    },
  },
})