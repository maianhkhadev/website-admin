import { takeLatest } from 'redux-saga/effects'
import axios from '@/plugins/axios'

// ACTIONS
import {
  REQUEST_USERS,
  REQUEST_USER,
  STORE_USER,
  UPDATE_USER,
  DELETE_USER,
  REQUEST_TASKS,
} from '../actions'

import TaskSaga from './task-saga'
import UserSaga from './user-saga'


export default function* mySaga() {

  yield takeLatest(REQUEST_USERS, UserSaga.index)

  yield takeLatest(REQUEST_USER, UserSaga.show)

  yield takeLatest(STORE_USER, UserSaga.store)

  yield takeLatest(UPDATE_USER, UserSaga.update)

  yield takeLatest(DELETE_USER, UserSaga.delete)

  yield takeLatest(REQUEST_TASKS, TaskSaga.index)
}
