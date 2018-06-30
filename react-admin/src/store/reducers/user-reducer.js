import { RECEIVE_USER } from '../actions'

export default (state = {}, { type, user = {} }) => {
  switch (type) {
    case RECEIVE_USER:
      return user
    default:
      return state
  }
}
