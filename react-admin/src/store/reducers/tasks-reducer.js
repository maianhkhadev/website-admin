import { RECEIVE_TASKS } from '../actions'

export default (state = [], { type, tasks = [] }) => {
  switch (type) {
    case RECEIVE_TASKS:
      return tasks
    default:
      return state
  }
}
