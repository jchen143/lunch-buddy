import {connect} from 'react-redux'
import {closeModal, openModal} from '../../actions/modal_actions'
import {fetchReservations, cancelReservation, createReservation} from '../../actions/reservation_actions'
import ReservationError from './reservation_error'
import {lastReservationId} from '../../selectors/last_reservation_selector'

const msp = (state, ownProps) => {
    return{
        currentUserId: state.session.currentUserId,
        reservationId: lastReservationId(state),
        tempLunchId: state.session.tempLunchId
        //lunch = use ownprops to take in lunch so I can have lunchId to go through with reservaiton
        //OR maybe take 
    }
}

const mdp = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal()), 
        fetchReservations: () => dispatch(fetchReservations()),
        cancelReservation: (id) => dispatch(cancelReservation(id)),
        openModal: (type) => dispatch(openModal(type)),
        createReservation: (reservation) => dispatch(createReservation(reservation))

        //PROP TO FETCH ALL RESERVATIONS AND THEN FIND THE LAST RESERVATION, EXTRACT ITS INFO TO CANCEL. 
        //Maybe add the lunch ID to the action, pass it in as a key  and pass it in through modal.jsx to the component 
    }
}

export default connect(msp, mdp)(ReservationError)