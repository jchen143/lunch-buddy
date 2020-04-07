import React from 'react'; 
import LoginFormContainer from '../forms/login_container'
import SignUpFormContainer from '../forms/signup_container'
import { Link } from 'react-router-dom'

const demo_info = {
    email: "demo_user@appacademy.io",
    password: "password"
}

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(e){
        this.props.login(demo_info)
    }

    render() {

        return(
            <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                <button onClick={this.handleClick}>Demo</button>
            </>
        )
    }

}

export default HomePage