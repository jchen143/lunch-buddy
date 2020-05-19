import {connect} from 'react-redux'
import Search from './search'
import {searchRestaurants} from '../../actions/restaurants_actions'
import {updateFilter} from '../../actions/filter_actions'
import {updateCurrentUser} from '../../actions/user_actions'

const msp = (state, ownProps) => {
    return {
        bounds: state.ui.filters.bounds, 
        user: state.entities.users,
        history: ownProps.history,
        current_user_id: state.session.currentUserId
    }
}

const mdp = (dispatch) => {

    return {
        searchRestaurants: (search, bounds) => dispatch(searchRestaurants(search, bounds)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        updateUser: (user) => dispatch(updateCurrentUser(user))
    }
}

export default connect(msp, mdp)(Search)

