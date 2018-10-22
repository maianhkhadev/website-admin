// USERS
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const requestUsers = params => ({ type: REQUEST_USERS, params })
export const receiveUsers = pagination => ({ type: RECEIVE_USERS, pagination })

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const STORE_USER = 'STORE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

export const requestUser = id => ({ type: REQUEST_USER, id })
export const receiveUser = user => ({ type: RECEIVE_USER, user })
export const storeUser = user => ({ type: STORE_USER, user })
export const updateUser = user => ({ type: UPDATE_USER, user })
export const deleteUser = (id, callback) => ({ type: DELETE_USER, id, callback })
export const deleteUserSuccess = user => ({ type: DELETE_USER_SUCCESS, user })

// TASKS
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

export const requestTasks = () => ({ type: REQUEST_TASKS })
export const receiveTasks = tasks => ({ type: RECEIVE_TASKS, tasks })

export const REQUEST_TASK = 'REQUEST_TASK'
export const RECEIVE_TASK = 'RECEIVE_TASK'
export const STORE_TASK = 'STORE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const requestTask = id => ({ type: REQUEST_TASK, id })
export const receiveTask = task => ({ type: RECEIVE_TASK, task })
export const storeTask = task => ({ type: STORE_TASK, task })
export const updateTask = task => ({ type: UPDATE_TASK, task })
export const deleteTask = id => ({ type: DELETE_TASK, id })
