import { connect } from 'react-redux'
import sessionForm from './session_form'
import { login, deleteSessionErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {

    //debugger
    return {
        errors: state.errors.session,
        formType: 'Log In'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        deleteSessionErrors: () => dispatch(deleteSessionErrors()), 
        login: (user) => dispatch(login(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm) 