import { combineReducers } from 'redux'
import userReducer from './users_reducer'
import lunchReducer from './lunches_reducer'


const entitiesReducer = combineReducers({
    users: userReducer,
    lunches: lunchReducer
}
)

export default entitiesReducer;
