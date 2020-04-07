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
        
       this.state = {email: ''};
        this.handleDemoClick = this.handleDemoClick.bind(this);
        this.handleOfferClick = this.handleOfferClick.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    handleDemoClick(e){
        this.props.login(demo_info)
    }

    handleOfferClick(e){
        this.props.receiveTempEmail(this.state.email)
    }

    handleChange(key){
        return e => this.setState({[key]: e.currentTarget.value})
    }

    render() {
        //debugger
        return(
            <>
                <nav>

                    <Link className="login-homepage" to='/login'>Login</Link>
                </nav>

                <section className="enticement">

                    <input type="text" onChange={this.handleChange('email')} value={this.state.email}/>
                    <Link to='/signup' onClick={this.handleOfferClick}>Start Saving!</Link>
                </section>
                
                
                <button onClick={this.handleDemoClick}>Demo</button>
            </>
        )
    }

}

export default HomePage