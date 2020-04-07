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
                <div className="header-container">
                    <nav>
                        <img className="logo" src={window.logoURL}/>
                        
                        <Link className="home-login-container" to='/login'>Log In</Link>
                      
                    </nav>
                </div>

                <section className="enticing-deals">
                    <img src={window.snackURL}/>
                    
                    <section className="enticement-container">
                        <h1>Begin Signing Up by entering your email below or just by clicking the Demo Button!</h1>
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email}/>
                        <Link to='/signup' onClick={this.handleOfferClick}>Start Saving Guap!</Link>
                        <button onClick={this.handleDemoClick}>Demo Log In</button>
                    </section>
                </section>
                
                
                
            </>
        )
    }

}

export default HomePage