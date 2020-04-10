import {connect} from 'react-redux'
import LunchesIndex from './lunches_index'
import {fetchLunches} from '../../actions/lunches_actions'
import {fetchRestaurants} from '../../actions/restaurants_actions'

const msp = (state) => {
    return {
        lunches: Object.values(state.entities.lunches),
        restaurants: state.entities.restaurants
    }
}

const mdp = (dispatch) => {

    return{
        fetchLunches: () => dispatch(fetchLunches()),
        fetchRestaurants: (bounds) => dispatch(fetchRestaurants(bounds))
    }
}

export default connect(msp, mdp)(LunchesIndex)