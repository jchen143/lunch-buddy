import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal_actions'
import ReservationError from './reservation_error'

const msp = (state, ownProps) => {
    return{
        currentUserId: state.session.currentUserId,
        //lunch = use ownprops to take in lunch so I can have lunchId to go through with reservaiton
    }
}

const mdp = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ReservationError)