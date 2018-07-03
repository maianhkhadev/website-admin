import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from '@/plugins/axios'

// ACTIONS
import {
  REQUEST_USERS,
  receiveUsers,
  REQUEST_USER,
  STORE_USER,
  UPDATE_USER,
  receiveUser,
  REQUEST_TASKS,
  receiveTasks
} from '../actions'

function* fetchUsers(action) {
  try {
    let { data } = yield axios.get('users')

    yield put(receiveUsers(data))
  }
  catch (e) {

  }
}

function* fetchUser(action) {
  try {
    let { data } = yield axios.get(`/users/${action.id}`)

    yield put(receiveUser(data))
  }
  catch (e) {

  }
}

function* storeUser(action) {
  try {
    let { data } = yield axios.post('users', action.user)

    yield put(receiveUser(data))
  }
  catch (e) {

  }
}

function* updateUser(action) {
  try {
    let { data } = yield axios.put(`/users/${action.user.id}`, action.user)

    yield put(receiveUser(data))
  }
  catch (e) {

  }
}

function* fetchTasks(action) {
  try {
    let res = yield axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${ action.page * 10 }&_limit=10`)
    yield put(receiveTasks(res.data))
  }
  catch (e) {

  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_USERS, fetchUsers)

  yield takeLatest(REQUEST_USER, fetchUser)

  yield takeLatest(STORE_USER, storeUser)

  yield takeLatest(UPDATE_USER, updateUser)

  yield takeLatest(REQUEST_TASKS, fetchTasks)
}
