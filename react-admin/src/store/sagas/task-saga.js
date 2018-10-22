import { call, put } from 'redux-saga/effects'
import { receiveTasks, receiveTask } from '@/store/actions'
import axios from '@/plugins/axios'

const saga = {

  index: function* (action) {
    try {
      let { data } = yield axios.get('tasks')

      yield put(receiveTasks(data))
    }
    catch (e) {

    }
  },

  show: function* (action) {
    try {
      let { data } = yield axios.get(`/tasks/${action.id}`)

      yield put(receiveTask(data))
    }
    catch (e) {

    }
  },

  store: function* (action) {
    try {
      let { data } = yield axios.post('tasks', action.task)

      yield put(receiveTask(data))
    }
    catch (e) {

    }
  },

  update: function* (action) {
    try {
      let { data } = yield axios.put(`/tasks/${action.task.id}`, action.task)

      yield put(receiveTask(data))
    }
    catch (e) {

    }
  },

  delete: function* (action) {
    try {
      let { data } = yield axios.delete(`/users/${action.id}`)

      yield put(receiveTask(data))
    }
    catch (e) {

    }
  }
}

export default saga
