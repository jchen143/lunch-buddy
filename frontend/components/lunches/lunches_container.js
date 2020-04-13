import { connect } from 'react-redux'
import Lunches from './lunches'
import {fetchLunches} from '../../actions/lunches_actions'
import {currentLocation} from '../../selectors/user_location_selector'
import {fetchRestaurants} from '../../actions/restaurants_actions'
import {updateFilter} from '../../actions/filter_actions'
import {createReservation} from '../../actions/reservation_actions'


const msp = (state) => {
    
    return {
        lunches: Object.values(state.entities.lunches),
        restaurants: state.entities.restaurants,
        location: currentLocation(state), 
        currentUser: state.session.currentUserId,
        errors: state.errors.reservationForm
    }
}

const mdp = (dispatch) => {
    return {
        fetchLunches: () => dispatch(fetchLunches()),
        fetchRestaurants: (bounds) => dispatch(fetchRestaurants(bounds)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        createReservation: (reservation) => dispatch(createReservation(reservation))
    }
}

export default connect(msp, mdp)(Lunches)