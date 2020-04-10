import { connect } from 'react-redux'
import Lunches from './lunches'
import {fetchLunches} from '../../actions/lunches_actions'
import {currentLocation} from '../../selectors/user_location_selector'


const msp = (state) => {
    
    return {
        lunches: Object.values(state.entities.lunches),
        location: currentLocation(state)
    }
}

const mdp = (dispatch) => {
    return {
        fetchLunches: (bounds) => dispatch(fetchLunches(bounds))
    }
}

export default connect(msp, mdp)(Lunches)