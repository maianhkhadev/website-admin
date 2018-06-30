import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
// ACTIONS
import {
  REQUEST_USER,
  receiveUser,
  REQUEST_USERS,
  receiveUsers,
  REQUEST_TASKS,
  receiveTasks
} from '../actions'

function* fetchUser(action) {
  try {
    let res = yield axios.get(`https://jsonplaceholder.typicode.com/users/${action.id}`)
    yield put(receiveUser(res.data))
  }
  catch (e) {

  }
}

function* fetchUser(action) {
  try {
    let res = yield axios.get(`https://jsonplaceholder.typicode.com/users/${action.id}`)
    yield put(receiveUser(res.data))
  }
  catch (e) {

  }
}

function* users(action) {
  try {
    let res = yield axios.get('https://jsonplaceholder.typicode.com/users')
    yield put(receiveUsers(res.data))
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
  yield takeLatest(REQUEST_USER, fetchUser)

  yield takeLatest(CREATE_USER, createUser)

  yield takeLatest(REQUEST_USERS, users)

  yield takeLatest(REQUEST_TASKS, fetchTasks)
}
