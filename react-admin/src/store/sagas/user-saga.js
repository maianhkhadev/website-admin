import { call, put } from 'redux-saga/effects'
import axios from '@/plugins/axios'
import { receiveUsers, receiveUser, deleteUserSuccess } from '@/store/actions'

const saga = {

  index: function* (action) {
    try {
      let { data } = yield axios.get('users', { params: action.params })

      yield put(receiveUsers(data))
    }
    catch (e) {

    }
  },

  show: function* (action) {
    try {
      let { data } = yield axios.get(`/users/${action.id}`)

      yield put(receiveUser(data))
    }
    catch (e) {

    }
  },

  store: function* (action) {
    try {
      let { data } = yield axios.post('users', action.user)

      yield put(receiveUser(data))
    }
    catch (e) {

    }
  },

  update: function* (action) {
    try {
      let { data } = yield axios.put(`/users/${action.user.id}`, action.user)

      yield put(receiveUser(data))
    }
    catch (e) {

    }
  },

  delete: function* (action) {
    try {
      let { data } = yield axios.delete(`/users/${action.id}`)

      if(action.callback !== undefined) {
        action.callback.call(data)
      }

      yield put(deleteUserSuccess(data))
    }
    catch (e) {

    }
  },
}

export default saga
