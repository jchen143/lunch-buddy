import {RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, CANCEL_RESERVATION} from '../actions/reservation_actions'

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_RESERVATIONS: 
            return action.reservations; 
        case RECEIVE_RESERVATION: 
            return Object.assign({}, state, {[action.reservation.id]: action.reservation})
        case CANCEL_RESERVATION:
            let temp = Object.assign({}, state); 
            delete temp[action.reservationId];
            return temp 
        default:
            return state;
    }
}

export default reservationsReducer 