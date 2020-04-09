import { connect } from 'react-redux'
import Nav from './nav'

const msp = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

export default connect(msp, null)(Nav)