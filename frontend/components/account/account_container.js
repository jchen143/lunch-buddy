import {connect} from 'react-redux'
import Account from './account'
import {fetchReservations} from '../../actions/reservation_actions'

const msp = (state) => {
    
    return {
        reservations: state.entities.reservations, 
    }
}

const mdp = (dispatch) => {
    return {
        fetchReservations: () => dispatch(fetchReservations())
    }
}

export default connect(msp, mdp)(Account)