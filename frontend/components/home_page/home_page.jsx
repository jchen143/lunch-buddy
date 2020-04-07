import React from 'react'; 
import LoginFormContainer from '../forms/login_container'
import SignUpFormContainer from '../forms/signup_container'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return(
            <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </>
        )
    }

}

export default HomePage