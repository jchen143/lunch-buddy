import {connect} from 'react-redux'
import Search from './search'
import {searchRestaurants} from '../../actions/restaurants_actions'
import {updateFilter} from '../../actions/filter_actions'

const msp = (state) => {
    return {
        bounds: state.ui.filters.bounds, 
    }
}

const mdp = (dispatch) => {

    return {
        searchRestaurants: (search, bounds) => dispatch(searchRestaurants(search, bounds)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    }
}

export default connect(msp, mdp)(Search)

