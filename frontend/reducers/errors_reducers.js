import {combineReducers} from 'redux'; 
import sessionErrors from './session_errors_reducer'
import reservationErrors from './reservation_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrors,
    reservationForm: reservationErrors
})

export default errorsReducer