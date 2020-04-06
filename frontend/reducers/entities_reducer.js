import { combineReducers } from 'redux'
import userReducer from './users_reducer'


const entitiesReducer = combineReducers({
    users: userReducerg
}
)

export default entitiesReducer;
