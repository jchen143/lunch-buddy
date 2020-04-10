import { connect } from 'react-redux'
import Lunches from './lunches'
import {fetchLunches} from '../../actions/lunches_actions'
import {currentLocation} from '../../selectors/user_location_selector'
import {fetchRestaurants} from '../../actions/restaurants_actions'


const msp = (state) => {
    
    return {
        lunches: Object.values(state.entities.lunches),
        location: currentLocation(state)
    }
}

const mdp = (dispatch) => {
    return {
        fetchLunches: () => dispatch(fetchLunches()),
        fetchRestaurants: (bounds) => dispatch(fetchRestaurants(bounds))
    }
}

export default connect(msp, mdp)(Lunches)