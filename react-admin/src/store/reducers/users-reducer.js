import { RECEIVE_USERS } from '../actions'

export default (state = { data: [] }, { type, pagination = { data: [] } }) => {
  switch (type) {
    case RECEIVE_USERS:
      return pagination
    default:
      return state
  }
}
