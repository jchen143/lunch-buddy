import { connect } from 'react-redux';
import HomePage from './home_page'; 
import { login } from '../../actions/session_actions'; 


const msp = (state) => {
    return {}
}

const mdp = (dispatch) =>{
    return{
        login: (user) => dispatch(login(user))
    }
}
export default connect(msp, mdp)(HomePage)