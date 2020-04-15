import {connect} from 'react-redux'
import ReservationIndex from './reservations_index'
import {fetchReservations} from '../../actions/reservation_actions'
import {fetchLunches} from '../../actions/lunches_actions'

const msp = (state, ownProps) => {
    debugger
    return {
        reservations: state.entities.reservations, 
        lunches: state.entities.lunches,
        restaurants: state.entities.restaurants 
    } 
}

const mdp = (dispatch) => {
    return{
        fetchReservations: () => dispatch(fetchReservations()), 
        fetchLunches: () => dispatch(fetchLunches()),
    }
}

export default connect(msp, mdp)(ReservationIndex)