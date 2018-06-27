import { RECEIVE_USERS } from '../actions'

const initialState = {
  users: []
}

export default (state = initialState, { type, text = '' }) => {
  switch (type) {
    case RECEIVE_USERS:
      return text
    default:
      return state
  }
}
