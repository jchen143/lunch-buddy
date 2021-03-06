export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_TEMP_EMAIL = "RECEIVE_TEMP_EMAIL"
export const DELETE_SESSION_ERRORS= "DELETE_SESSION_ERRORS"
export const RECEIVE_TEMP_LUNCH_ID = "RECEIVE_TEMP_LUNCH_ID"

import * as SessionApiUtil from '../util/session_api_util'

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = (errors) => ({ //errors is an array
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const receiveTempLunchId = (lunchId) => {
    return {
        type: RECEIVE_TEMP_LUNCH_ID,
        lunchId 
    }
}
export const receiveTempEmail = (email) => {
    return {
        type: RECEIVE_TEMP_EMAIL,
        email: email
    }
}

export const deleteSessionErrors = () => {
    return{
        type: DELETE_SESSION_ERRORS
    }
}

export const login = (user) => (dispatch) => {
    //
    return SessionApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveSessionErrors(err.responseJSON))) 
}

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signUp = (user) => (dispatch) => {
    //debugger
    return SessionApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveSessionErrors(err.responseJSON))) 
}