import { connect } from 'react-redux'
import sessionForm from './session_form'
import { signUp } from '../../actions/session_actions'

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
        processForm: (user) => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm)