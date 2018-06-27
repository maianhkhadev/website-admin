import { combineReducers } from 'redux'
// REDUCERS
import UserReducer from './users-reducer'
import ClientReducer from './client-reducer'

export default combineReducers({
  UserReducer,
  ClientReducer
})
