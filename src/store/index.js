import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getDefaultState() {
  return {
    user: {},

    bundles: [],
    focusedBundle: {},
    newBundle: {},

    logs: [],

    ports: [],
    selectedPort: null,
    connectedPort: {},
    isConnected: false,
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
    addBundle: function(state, payload) {
      state.bundles.push(payload)
    },
    addLog: function(state, payload) {
      state.logs.push({
        ...payload,
        time: new Date(),
      })
    },
  },
})