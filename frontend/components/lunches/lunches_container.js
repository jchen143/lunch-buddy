import { connect } from 'react-redux'
import Lunches from './lunches'
import {logout} from '../../actions/session_actions'

const msp = (state) => {
    return {}
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Lunches)