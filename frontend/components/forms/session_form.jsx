import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 

        let temp_email; 
        //debugger
        temp_email = this.props.tempEmail ? this.props.tempEmail : '';
        //debugger
        this.state = {email: temp_email, password: ''};
        //debugger
        
    }

    componentDidMount(){
        let temp_email;
        //debugger
        temp_email = this.props.tempEmail ? this.props.tempEmail : '';
        this.setState({email: temp_email})
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
        if (this.props.formType === 'Log In'){
            header = <h1>WELCOME BACK</h1>
            message = <p>Don't have a LunchBuddy Account?</p>
            link = <Link to='signup'>Sign up!</Link>
        }else{
            header = <h1>WELCOME TO LUNCHBUDDY</h1>
           
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
       //debugger

        return(
        <>
            {header}
                <ul>
                    {errors}
                </ul>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                </label>
                
                <label>Password:
                    <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
                </label>
                <button>{buttonText}</button>
            </form>
            {message}
            {link}
            
        </>)
    }
}

export default SessionForm 