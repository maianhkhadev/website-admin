export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

export const requestUser = id => ({ type: REQUEST_USER, id })
export const receiveUser = user => ({ type: RECEIVE_USER, user })
export const createUser = user => ({ type: CREATE_USER, user })
export const updateUser = user => ({ type: UPDATE_USER, user })
export const deleteUser = user => ({ type: DELETE_USER, user })

export const requestUsers = () => ({ type: REQUEST_USERS })
export const receiveUsers = users => ({ type: RECEIVE_USERS, users })

export const requestTasks = page => ({ type: REQUEST_TASKS, page })
export const receiveTasks = tasks => ({ type: RECEIVE_TASKS, tasks })
