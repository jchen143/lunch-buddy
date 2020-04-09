import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'
import { Link } from 'react-router-dom'
import {Image} from 'react-bootstrap'


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
                    <Nav />
                </div>

                <div className="home-page">
                    

                    <section className="enticing-deals">

                       { /*<Image className="enticing-deals-child" src={window.snackURL} fluid/>*/}
                        
                        <section className="enticement-container enticing-deals-child">
                            <h1>Let's Lunch!</h1>
                            <div className="purple-bar"></div>
                            <input type="text" className="user-input" onChange={this.handleChange('email')} value={this.state.email} placeholder="Enter your email to get access to lunch time deals!"/>

                            <div className="sign-up-or-demo-container">
                                <Link to='/signup' className="invite-button" onClick={this.handleOfferClick}>Start Saving!</Link>
                                <button className="invite-button" onClick={this.handleDemoClick}>Demo Log In</button>
                            </div>
                        </section>
                        
                    </section>
                    
                </div>
                
            </>
        )
    }

}

export default HomePage