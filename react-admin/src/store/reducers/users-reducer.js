import { RECEIVE_USERS } from '../actions'

export default (state = [], { type, users = [] }) => {
  switch (type) {
    case RECEIVE_USERS:
      return users
    default:
      return state
  }
}
