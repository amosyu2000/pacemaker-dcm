const modes = {
  1: {
    name: "AOO",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "ATR_AMP", "ATR_PW"
    ],
  },
  2: {
    name: "AAI",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "PVARP", "ATR_AMP", 
      "ATR_PW", "ARP", "ATR_SENSE"
    ],
  },
  3: {
    name: "VOO",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "VENT_AMP", "VENT_PW"
    ],
  },
  4: {
    name: "VVI",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "VENT_AMP", "VENT_PW", 
      "VRP", "VENT_SENSE"
    ],
  },
  5: {
    name: "DOO",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "ATR_AMP",
      "ATR_PW", "VENT_AMP", "VENT_PW"
    ],
  },
  6: {
    name: "DOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "MAX_SENSE", 
      "REACT_TIME", "RESP_FACTOR", "ACTIVITY_THRESH", "RCVR_TIME",
      "ATR_AMP", "ATR_PW", "VENT_AMP", "VENT_PW"
    ],
  },
  7: {
    name: "AOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "REACT_TIME", "RESP_FACTOR", 
      "ACTIVITY_THRESH", "RCVR_TIME", "MAX_SENSE", "ATR_AMP", "ATR_PW"
    ],
  },
  8: {
    name: "VOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "REACT_TIME", "RESP_FACTOR", 
      "ACTIVITY_THRESH", "RCVR_TIME", "MAX_SENSE", "VENT_AMP", "VENT_PW"
    ],
  },
  9: {
    name: "AAIR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "PVARP", "REACT_TIME", "RESP_FACTOR", 
      "ACTIVITY_THRESH", "RCVR_TIME", "MAX_SENSE", "ATR_AMP", "ATR_PW", "ARP", 
      "ATR_SENSE"
    ],
  },
  10: {
    name: "VVIR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "REACT_TIME", "RESP_FACTOR", 
      "ACTIVITY_THRESH", "RCVR_TIME", "MAX_SENSE", "VENT_AMP", "VENT_PW",
      "VRP", "VENT_SENSE"
    ],
  },
  // : {
  //   name: "VDD",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "VENT_AMP", "VENT_PW", 
  //     "VENT_SENSE", "VRP"
  //   ],
  // },
  // : {
  //   name: "DDI",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "ATR_AMP", "VENT_AMP", 
  //     "ATR_PW", "VENT_PW", "ATR_SENSE", "VENT_SENSE", "VRP", "ARP", "PVARP"
  //   ],
  // },
  // : {
  //   name: "DDD",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "ATR_AMP", "VENT_AMP", 
  //     "ATR_PW", "VENT_PW", "ATR_SENSE", "VENT_SENSE", "VRP", "ARP", "PVARP"
  //   ],
  // },
  // : {
  //   name: "AAT",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "ATR_AMP", "ATR_PW", "ATR_SENSE", 
  //     "ARP", "PVARP"
  //   ],
  // },
  // : {
  //   name: "VVT",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "VENT_AMP", "VENT_PW", "VENT_SENSE", 
  //     "VRP"
  //   ],
  // },
  // : {
  //   name: "VDDR",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY", "VENT_AMP", 
  //     "VENT_PW", "VENT_SENSE", "VRP", "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", 
  //     "RCVR_TIME"
  //   ],
  // },
  // : {
  //   name: "DDIR",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY", "ATR_AMP", 
  //     "VENT_AMP", "ATR_PW", "VENT_PW", "ATR_SENSE", "VENT_SENSE", "VRP", "ARP", "PVARP", 
  //     "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
  //   ],
  // },
  // : {
  //   name: "DDDR",
  //   parameters: [
  //     "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY", "ATR_AMP", 
  //     "VENT_AMP", "ATR_PW", "VENT_PW", "ATR_SENSE", "VENT_SENSE", "VRP", "ARP", "PVARP",
  //     "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
  //   ],
  // },
}

const parameters = {
  UPPER_RATE_LIMIT:  { name: "Upper Rate Limit",        type: Number, min: 50,  max: 175, increment: 5 },
  LOWER_RATE_LIMIT:  { name: "Lower Rate Limit",        type: Number, min: 30,  max: 175, increment: 1 },
  PVARP:             { name: "PVARP",                   type: Number, min: 150, max: 500, increment: 10 },
  AV_DELAY:          { name: "Fixed AV Delay",          type: Number, min: 70,  max: 300, increment: 10 },
  REACT_TIME:        { name: "Reaction Time",           type: Number, min: 10,  max: 50,  increment: 1 },
  RESP_FACTOR:       { name: "Response Factor",         type: Number, min: 1,   max: 16,  increment: 1 },
  ACTIVITY_THRESH:   { name: "Activity Threshold",      type: Number, min: 0,   max: 6,   increment: 1 },
  RCVR_TIME:         { name: "Recovery Time",           type: Number, min: 2,   max: 16,  increment: 1 },
  MAX_SENSE:         { name: "Maximum Sensor Rate",     type: Number, min: 50,  max: 175, increment: 5 },
  ATR_AMP:           { name: "Atrial Amplitude",        type: Number, min: 0.5, max: 7,   increment: 0.1 },
  ATR_PW:            { name: "Atrial Pulse Width",      type: Number, min: 0.1, max: 1.9, increment: 0.1 },
  ARP:               { name: "ARP",                     type: Number, min: 150, max: 500, increment: 10 },
  ATR_THRESH:        { name: "Atrial Threshold",        type: Number, min: 1,   max: 10,  increment: 1 },
  ATR_SENSE:         { name: "Atrial Sensitivity",      type: Number, min: 1,   max: 10,  increment: 1 },
  VENT_AMP:          { name: "Ventricular Amplitude",   type: Number, min: 0.5, max: 7,   increment: 0.1 },
  VENT_PW:           { name: "Ventricular Pulse Width", type: Number, min: 0.1, max: 1.9, increment: 0.1 },
  VRP:               { name: "VRP",                     type: Number, min: 150, max: 500, increment: 10 },
  VENT_THRESH:       { name: "Ventricular Threshold",   type: Number, min: 1,   max: 10,  increment: 1 },
  VENT_SENSE:        { name: "Ventricular Sensitivity", type: Number, min: 1,   max: 10,  increment: 1 },

  // ATR_DUR:           { name: "ATR Duration",            type: Number, min: 0, max: 9999, increment: 1 },
  // ATR_FALLBACK_MODE: { name: "ATR Fallback Mode",       type: Number, min: 0, max: 9999, increment: 1 },
  // ATR_FALLBACK_TIME: { name: "ATR Fallback Time",       type: Number, min: 0, max: 9999, increment: 1 },
  // PVARP_EXT:         { name: "PVARP Extension",         type: Number, min: 0, max: 9999, increment: 1 },
  // HYSTERESIS:        { name: "Hysteresis",              type: Boolean },
  // RATE_SMOOTH:       { name: "Rate Smoothing",          type: Number, min: 0, max: 9999, increment: 1 },
}

export default {
  get: function(modeId) {
    const mode = modes[modeId]
    if (mode === undefined) {
      return {}
    }
    else {
      return {
        id: modeId,
        name: mode.name,
        parameters: mode.parameters.map(p => ({
          id: p,
          ...parameters[p],
        }))
      }
    }
  },
  options: Object.entries(modes).map(([k,v]) => ({name: v.name, value: Number(k)})),
}