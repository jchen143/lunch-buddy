import { combineReducers } from 'redux'
import userReducer from './users_reducer'
import lunchReducer from './lunches_reducer'
import restaurantReducer from './restaurants_reducer'
import reservationsReducer from './reservation_reducer'


const entitiesReducer = combineReducers({
    users: userReducer,
    lunches: lunchReducer,
    restaurants: restaurantReducer,
    reservations: reservationsReducer 
}
)

export default entitiesReducer;
