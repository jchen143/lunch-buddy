import { connect } from 'react-redux'
import Nav from './nav'
import {logout} from '../../actions/session_actions'

const msp = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Nav)