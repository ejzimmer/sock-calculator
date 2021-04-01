const { createStore } = require("redux");

export const ACTIONS = {
  RESET: 'reset'
}

export const resetAction = () => ({ type: ACTIONS.RESET })

const reducer = (state = {}, action) => {
  return state
}

export const store = createStore(reducer)