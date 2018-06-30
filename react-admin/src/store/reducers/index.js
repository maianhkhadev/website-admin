import { combineReducers } from 'redux'
// REDUCERS
import UserReducer from './user-reducer'
import UsersReducer from './users-reducer'
import TasksReducer from './tasks-reducer'

export default combineReducers({
  UserReducer,
  UsersReducer,
  TasksReducer
})
