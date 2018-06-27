import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
// ACTIONS
import { REQUEST_HELLO_WORLD, receiveHelloWorld } from '../actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {

  try {
    let res = yield axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    yield put(receiveHelloWorld('Hello world from redux saga'))
  }
  catch (e) {

  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld)
}
