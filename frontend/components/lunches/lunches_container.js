import { connect } from 'react-redux'
import Lunches from './lunches'
import {logout} from '../../actions/session_actions'
import {fetchLunches} from '../../actions/lunches_actions'

const msp = (state) => {
    debugger
    return {
        lunches: Object.values(state.entities.lunches)
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchLunches: (bounds) => dispatch(fetchLunches(bounds))
    }
}

export default connect(msp, mdp)(Lunches)