export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

import * as SessionApiUtil from '../util/session_api_util'

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({ //errors is an array
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch) => {
    //
    return SessionApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON))) //.catch(err => dispatch(receiveErrors(err)))
}

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signUp = (user) => (dispatch) => {
    //debugger
    return SessionApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON))) //.catch(err => dispatch(receiveErrors(err)))
}