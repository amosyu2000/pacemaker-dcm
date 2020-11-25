import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getDefaultState() {
  return {
    user: {},

    logs: [],
    
    bundles: [],
    focusedBundle: {},
    newBundle: {},
    pacemakerBundle: {MODE: null},

    ports: [],
    selectedPort: null,
    connectedPort: {isOpen: false},

    isStreaming: false,
    egramTimeData: [],
    egramAtrialData: [],
    egramVentricularData: [],
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
    push: function(state, payload) {
      Object.keys(payload).forEach(k => state[k].push(payload[k]))
    },
    pop: function(state, payload) {
      return state[payload].pop()
    },
    unshift: function(state, payload) {
      Object.keys(payload).forEach(k => state[k].unshift(payload[k]))
    },
  },
})