import { connect } from 'react-redux';
import HomePage from './home_page'; 
import { login, receiveTempEmail } from '../../actions/session_actions'; 



const msp = (state) => {
    return {}
}

const mdp = (dispatch) =>{
    return{
        login: (user) => dispatch(login(user)), 
        receiveTempEmail: (email) => dispatch(receiveTempEmail(email))
    }
}
export default connect(msp, mdp)(HomePage)