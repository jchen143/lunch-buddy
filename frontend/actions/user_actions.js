import * as UserApiUtil from '../util/user_util'
export const UPDATE_USER = "UPDATE_USER"

const updateUser = (user) => ({
    type: UPDATE_USER,
    user 
})

export const updateCurrentUser = (user) => (dispatch) => {
    return UserApiUtil.updateUser(user).then(user => dispatch(updateUser(user)))
}