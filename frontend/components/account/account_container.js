import {connect} from 'react-redux'
import Account from './account'

const msp = (state) => {
    return {
        lunches: state.entities.lunches, 
        restaurants: state.entities.restaurants 
    }
}

const mdp = (dispatch) => {
    return {
        
    }
}

export default connect(msp, mdp)(Account)