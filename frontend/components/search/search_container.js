import {connect} from 'react-redux'
import Search from './search'
import {searchRestaurants} from '../../actions/restaurants_actions'

const msp = (state) => {
    return {
        bounds: state.ui.filters.bounds, 
    }
}

const mdp = (dispatch) => {

    return {
        searchRestaurants: (search, bounds) => dispatch(searchRestaurants(search, bounds))
    }
}

export default connect(msp, mdp)(Search)

