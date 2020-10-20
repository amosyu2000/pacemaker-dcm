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
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "ATR_AMP", "ATR_PW", "ATR_SENS", 
      "ARP", "PVARP", "HYSTERESIS", "RATE_SMOOTH"
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
      "VENT_SENS", "VRP", "HYSTERESIS", "RATE_SMOOTH"
    ],
  },
  5: {
    name: "VDD",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY_FIXED", "AV_DELAY_DYNA", 
      "VENT_AMP", "VENT_PW", "VENT_SENS", "VRP", "PVARP_EXT", "RATE_SMOOTH",
      "ATR_DUR", "ATR_FALLBACK_MODE", "ATR_FALLBACK_TIME"
    ],
  },
  6: {
    name: "DOO",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY_FIXED", "ATR_AMP",
      "VENT_AMP", "ATR_PW", "VENT_PW"
    ],
  },
  7: {
    name: "DDI",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY_FIXED", "ATR_AMP",
      "VENT_AMP", "ATR_PW", "VENT_PW", "ATR_SENS", "VENT_SENS", "VRP", "ARP",
      "PVARP"
    ],
  },
  8: {
    name: "DDD",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "AV_DELAY_FIXED", "AV_DELAY_DYNA",
      "AV_DELAY_SENSED", "ATR_AMP", "VENT_AMP", "ATR_PW", "VENT_PW", "ATR_SENS", 
      "VENT_SENS", "VRP", "ARP", "PVARP", "PVARP_EXT", "HYSTERESIS", 
      "RATE_SMOOTH", "ATR_DUR", "ATR_FALLBACK_MODE", "ATR_FALLBACK_TIME"
    ],
  },
  9: {
    name: "AAT",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "ATR_AMP", "ATR_PW", "ATR_SENS", 
      "ARP", "PVARP"
    ],
  },
  10: {
    name: "VVT",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "VENT_AMP", "VENT_PW", 
      "VENT_SENS", "VRP"
    ],
  },
  11: {
    name: "AOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "ATR_AMP", "ATR_PW", 
      "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  12: {
    name: "AAIR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "ATR_AMP", "ATR_PW", 
      "ATR_SENS", "ARP", "PVARP", "HYSTERESIS", "RATE_SMOOTH", 
      "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  13: {
    name: "VOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "VENT_AMP", "VENT_PW",
      "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  14: {
    name: "VVIR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "VENT_AMP", "VENT_PW", 
      "VENT_SENS", "VRP", "HYSTERESIS", "RATE_SMOOTH", "ACTIVITY_THRESH", 
      "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  15: {
    name: "VDDR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY_FIXED", 
      "AV_DELAY_DYNA", "VENT_AMP", "VENT_PW", "VENT_SENS", "VRP", "PVARP_EXT", 
      "RATE_SMOOTH", "ATR_DUR", "ATR_FALLBACK_MODE", "ATR_FALLBACK_TIME",
      "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  16: {
    name: "DOOR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY_FIXED", 
      "ATR_AMP", "VENT_AMP", "ATR_PW", "VENT_PW", "ACTIVITY_THRESH", 
      "REACT_TIME", "RESP_FACTOR", "RCVR_TIME"
    ],
  },
  17: {
    name: "DDIR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY_FIXED", 
      "ATR_AMP", "VENT_AMP", "ATR_PW", "VENT_PW", "ATR_SENS", "VENT_SENS", 
      "VRP", "ARP", "PVARP", "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", 
      "RCVR_TIME"
    ],
  },
  18: {
    name: "DDDR",
    parameters: [
      "LOWER_RATE_LIMIT", "UPPER_RATE_LIMIT", "MAX_SENSE", "AV_DELAY_FIXED", 
      "AV_DELAY_DYNA", "AV_DELAY_SENSED", "ATR_AMP", "VENT_AMP", "ATR_PW", 
      "VENT_PW", "ATR_SENS", "VENT_SENS", "VRP", "ARP", "PVARP", "PVARP_EXT", 
      "HYSTERESIS", "RATE_SMOOTH", "ATR_DUR", "ATR_FALLBACK_MODE", 
      "ATR_FALLBACK_TIME", "ACTIVITY_THRESH", "REACT_TIME", "RESP_FACTOR", 
      "RCVR_TIME"
    ],
  },
}

const parameters = {
  VOLTAGE:           { name: "Voltage",                 type: Number },
  LOWER_RATE_LIMIT:  { name: "Lower Rate Limit",        type: Number },
  UPPER_RATE_LIMIT:  { name: "Upper Rate Limit",        type: Number },
  MAX_SENSE:         { name: "Maximum Sensor Rate",     type: Number },
  AV_DELAY_FIXED:    { name: "Fixed AV Delay",          type: Number },
  AV_DELAY_DYNA:     { name: "Dynamic AV Delay",        type: Number },
  AV_DELAY_SENSED:   { name: "Sensed AV Delay Offset",  type: Number },
  ATR_AMP:           { name: "Atrial Amplitude",        type: Number },
  VENT_AMP:          { name: "Ventricular Amplitude",   type: Number },
  ATR_PW:            { name: "Atrial Pulse Width",      type: Number },
  VENT_PW:           { name: "Ventricular Pulse Width", type: Number },
  ATR_SENS:          { name: "Atrial Sensitivity",      type: Number },
  VENT_SENS:         { name: "Ventricular Sensitivity", type: Number },
  VRP:               { name: "VRP",                     type: Number },
  ARP:               { name: "ARP",                     type: Number },
  PVARP:             { name: "PVARP",                   type: Number },
  PVARP_EXT:         { name: "PVARP Extension",         type: Number },
  HYSTERESIS:        { name: "Hysteresis",              type: Boolean },
  RATE_SMOOTH:       { name: "Rate Smoothing",          type: Number },
  ATR_DUR:           { name: "ATR Duration",            type: Number },
  ATR_FALLBACK_MODE: { name: "ATR Fallback Mode",       type: Number },
  ATR_FALLBACK_TIME: { name: "ATR Fallback Time",       type: Number },
  VENT_THRESH:       { name: "Ventricular Threshold",   type: Number },
  ATR_THRESH:        { name: "Atrial Threshold",        type: Number },
  ACTIVITY_THRESH:   { name: "Activity Threshold",      type: Number },
  REACT_TIME:        { name: "Reaction Time",           type: Number },
  RESP_FACTOR:       { name: "Response Factor",         type: Number },
  RCVR_TIME:         { name: "Recovery Time",           type: Number },
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