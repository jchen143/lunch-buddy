import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_TEMP_EMAIL } from '../actions/session_actions'

const _nullSession = {
    currentUserId: null
};
const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUserId: action.currentUser.id })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_TEMP_EMAIL: 
            return Object.assign({}, {tempEmail: action.email})
        default:
            return state;
    }


}


export default sessionReducer