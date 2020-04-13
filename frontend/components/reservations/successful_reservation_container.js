import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import SuccessfulReservation from './success_reservation'

const msp = (state, ownProps) => {
    //debugger
    return {
        currentUserId: state.session.currentUserId,
        //lunch = use ownprops to take in lunch so I can have lunchId to go through with reservaiton
    }
}

const mdp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(SuccessfulReservation)