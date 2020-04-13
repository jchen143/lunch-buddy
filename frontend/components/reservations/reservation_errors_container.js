import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal_actions'
import ReservationError from './reservation_error'

const msp = (state, ownProps) => {
    return{
        currentUserId: state.session.currentUserId,
        //lunch = use ownprops to take in lunch so I can have lunchId to go through with reservaiton
        //OR maybe take 
    }
}

const mdp = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal())
        //PROP TO FETCH ALL RESERVATIONS AND THEN FIND THE LAST RESERVATION, EXTRACT ITS INFO TO CANCEL. 
        //Maybe add the lunch ID to the action, pass it in as a key  and pass it in through modal.jsx to the component 
    }
}

export default connect(msp, mdp)(ReservationError)