import { connect } from 'react-redux'
import sessionForm from './session_form'
import { signUp, deleteSessionErrors, login} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    //adebugger
    return {
        errors: state.errors.session,
        tempEmail: state.session.tempEmail,
        formType: 'Sign Up'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signUp(user)),
        deleteSessionErrors: () => dispatch(deleteSessionErrors()), 
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)