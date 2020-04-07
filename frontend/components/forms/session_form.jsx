import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.state = {email: '', password: ''};
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
        //header message
        let header;
        if (this.props.formType === 'Log In'){
            header = <h1>WELCOME BACK</h1>
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
        </>)
    }
}

export default SessionForm 