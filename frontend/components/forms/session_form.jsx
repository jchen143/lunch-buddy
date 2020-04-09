import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../nav_bar/nav_bar_container'
import Footer from '../footer/footer'

class SessionForm extends React.Component{
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.handleSelection = this.handleSelection.bind(this);
        let temp_email; 
        //debugger
        temp_email = this.props.tempEmail ? this.props.tempEmail : '';
        //debugger
        this.state = {email: temp_email, password: '', location: ''};
        //debugger
        
    
    }
    handleSelection(e){
        this.setState({location: e.target.value})
    }

    componentDidMount(){
        // let temp_email;
        // //debugger
        // temp_email = this.props.tempEmail ? this.props.tempEmail : '';
        // this.setState({email: temp_email})
        //debugger
        this.props.deleteSessionErrors(); 
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.processForm(this.state)
        this.setState({ email: '', password: ''});
    }

    handleChange(key){
        return e => this.setState({[key]: e.currentTarget.value})
    }

    render(){
        //header message and redirect link
        let header;
        let message = null; 
        let link = null;
        let location = null; 
        let classname = null;
        if (this.props.formType === 'Log In'){
            header = <h4 className="form-title">WELCOME BACK</h4>
            message = <p className="caption">Don't have a LunchBuddy Account?</p>
            link = <Link className="message" to='signup'>Sign up!</Link>
            classname = "log-in-form-container"
        }else{
            classname = "sign-up-form-container"
            header = <h4 className="form-title">Create an Account</h4>
            location = (
             <div className="form-field">
                 <label>Location:
                    <select className="form-field" id="location-dropdown" className="user-input" onChange={this.handleSelection}>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Bronx">Bronx</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Queens">Queens</option>
                        <option value="Staten Island">Staten Island</option>
                    </select>
                </label>
            </div>
            
            )
        }

        //button submission text 
        let buttonText = this.props.formType; 

        //list of errors 
        let errors = null; 
        if (this.props.errors.length > 0){
            errors = this.props.errors.map((error, index) => {
                return <li key={index}>{error}</li>;
            })
        }

        //Link to the other page
       //Location dropdown if it is the sign up form
        

        return(
        <>
            <div className="header-container">
                <Nav /> 
            </div>
            
            <div className={classname}>
                    
            <form className="log-in-form-box" onSubmit={this.handleSubmit}>
                        {header}
                        <ul>
                            {errors}
                        </ul>
                <div className="form-field">
                    <label>Email: 
                        <input type="text" className="user-input" value={this.state.email} onChange={this.handleChange('email')}/>
                    </label>
                </div>
                
                <div className="form-field">
                    <label>Password:
                        <input type="password" className="user-input" onChange={this.handleChange('password')} value={this.state.password}/>
                    </label>
                </div>

                
                {location}
                   
                <br></br>
                <button className="session-submit">{buttonText}</button>
                {message}
                {link}
            </form>
            
        </div>
           <Footer /> 
        </>)
    }
}

export default SessionForm 