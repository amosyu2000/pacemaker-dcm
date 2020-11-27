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
  11: {
    name: "DDD",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "ATR_AMP", "ATR_PW", 
      "ARP", "VENT_AMP", "VENT_PW", "VRP"
    ],
  },
  12: {
    name: "DDDR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY", "MAX_SENSE", 
      "REACT_TIME", "RESP_FACTOR", "ACTIVITY_THRESH", "RCVR_TIME",
      "ATR_AMP", "ATR_PW", "ARP", "VENT_AMP", "VENT_PW", "VRP"
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
}

const parameters = {
  MODE:             { name: "Pacing Mode",                   unit: false, min: 1,   max: 10,  increment: 1,   start: 0,  bytes: 2 },
  LOWER_RATE_LIMIT: { name: "Lower Rate Limit",              unit: "ppm", min: 30,  max: 175, increment: 1,   start: 2,  bytes: 2 },
  UPPER_RATE_LIMIT: { name: "Upper Rate Limit",              unit: "ppm", min: 50,  max: 175, increment: 5,   start: 4,  bytes: 2 },
  PVARP:            { name: "PVARP",                         unit: "ms",  min: 150, max: 500, increment: 10,  start: 6,  bytes: 2 },
  AV_DELAY:         { name: "Fixed AV Delay",                unit: "ms",  min: 70,  max: 300, increment: 10,  start: 8,  bytes: 2 },
  REACT_TIME:       { name: "Reaction Time",                 unit: "s",   min: 10,  max: 50,  increment: 1,   start: 10, bytes: 2 },
  RESP_FACTOR:      { name: "Response Factor",               unit: false, min: 1,   max: 16,  increment: 1,   start: 12, bytes: 2 },
  ACTIVITY_THRESH:  { name: "Activity Threshold",            unit: false, min: 0,   max: 6,   increment: 1,   start: 14, bytes: 8 }, 
  RCVR_TIME:        { name: "Recovery Time",                 unit: "min", min: 2,   max: 16,  increment: 1,   start: 22, bytes: 2 },
  MAX_SENSE:        { name: "Maximum Sensor Rate",           unit: "ppm", min: 50,  max: 175, increment: 5,   start: 24, bytes: 2 },
  ATR_AMP:          { name: "Atrial Amplitude",              unit: "V",   min: 0,   max: 5,   increment: 0.1, start: 26, bytes: 8 },
  ATR_PW:           { name: "Atrial Pulse Width",            unit: "ms",  min: 1,   max: 30,  increment: 1,   start: 34, bytes: 2 },
  ARP:              { name: "Atrial Refractory Period",      unit: "ms",  min: 150, max: 500, increment: 10,  start: 36, bytes: 2 },
  ATR_THRESH:       { name: "Atrial Threshold",              unit: "V",   min: 1,   max: 10,  increment: 1,   start: 38, bytes: 8 },
  ATR_SENSE:        { name: "Atrial Sensitivity",            unit: "mV",  min: 0,   max: 5,   increment: 0.1, start: 46, bytes: 8 },
  VENT_AMP:         { name: "Ventricular Amplitude",         unit: "V",   min: 0,   max: 5,   increment: 0.1, start: 54, bytes: 8 },
  VENT_PW:          { name: "Ventricular Pulse Width",       unit: "ms",  min: 1,   max: 30,  increment: 1,   start: 62, bytes: 2 },
  VRP:              { name: "Ventricular Refractory Period", unit: "ms",  min: 150, max: 500, increment: 10,  start: 64, bytes: 2 },
  VENT_THRESH:      { name: "Ventricular Threshold",         unit: "V",   min: 1,   max: 10,  increment: 1,   start: 66, bytes: 8 },
  VENT_SENSE:       { name: "Ventricular Sensitivity",       unit: "mV",  min: 0,   max: 5,   increment: 0.1, start: 74, bytes: 8 },
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
  parameters: parameters
}