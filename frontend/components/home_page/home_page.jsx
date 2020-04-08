import React from 'react'; 
import Nav from '../nav_bar/nav'
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
                <div className="home-page">
                    <div className="header-container">
                            <Nav /> 
                    </div>

                    <section className="enticing-deals">

                        <img className="enticing-deals-child" src={window.snackURL}/>
                        
                        <section className="enticement-container enticing-deals-child">
                            <h1>Sign Up or Click the Demo Button to Start Grubbin'!</h1>
                            <input type="text" className="user-input" onChange={this.handleChange('email')} value={this.state.email} placeholder="Enter your email to get access to lunch time deals!"/>
                            <Link to='/signup' className="invite-button" onClick={this.handleOfferClick}>Start Saving on Lunch!</Link>
                            <button className="invite-button" onClick={this.handleDemoClick}>Demo Log In</button>
                        </section>
                        
                    </section>
                    
                </div>
                
            </>
        )
    }

}

export default HomePage