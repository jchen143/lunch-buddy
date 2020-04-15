import {connect} from 'react-redux'
import ReservationIndex from './reservations_index'
import {fetchReservations, cancelReservation} from '../../actions/reservation_actions'
import {fetchLunches} from '../../actions/lunches_actions'

const msp = (state, ownProps) => {
    
    return {
        reservations: state.entities.reservations, 
        lunches: ownProps.lunches,
        restaurants: ownProps.restaurants 
    } 
}

const mdp = (dispatch) => {
    return{
        fetchReservations: () => dispatch(fetchReservations()), 
        fetchLunches: () => dispatch(fetchLunches()),
       cancelReservation: (res) => dispatch(cancelReservation(res))
    }
}

export default connect(msp, mdp)(ReservationIndex)