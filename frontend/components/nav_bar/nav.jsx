import React from 'react'
import { Link } from 'react-router-dom'



class Nav extends React.Component {
    constructor(props){
        super(props)

        this.state = {active: false};
        this.handleClick = this.handleClick.bind(this); 
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleClick(e){
        e.preventDefault(); 

        let oppositeBool = !this.state.active
        this.setState({active: oppositeBool}); 
    }
    handleLogout(e){
        e.preventDefault(); 
        //debugger
        this.props.logout();
    }

    render(){

        let contact = 
        <div className="contact-info"> 
                <a href="https://jchen143.github.io" target="_blank">
                    <img src={window.personal_site} alt="linkedin" />
                    <p>Personal Site</p>
                </a>
                <a href="https://www.linkedin.com/in/jchen143/" target="_blank">
                <img src={window.linkedin} alt="linkedin" />
                <p>Linkedin</p>
            </a>
                <a href="https://github.com/jchen143" target="_blank">
                    <img src={window.github} alt="github" />
                    <p>Github</p>
            </a>
                <a href="https://angel.co/u/jonathan-chen-44" target="_blank">
                    <img src={window.angellist} alt="angellist" />
                    <p>Angel List</p>
            </a>
        </div>
        let navRight;
        
        if (!this.props.loggedIn){
            navRight = 
            <div className="navRight">
                {contact}
                <Link className="home-login-container" to='/login'>Log In</Link>
            </div>
        }else{
            navRight = (
                <div className="navRight">
                    {contact}
                    <div className="dropdown-trigger">

                        <button className="menu-dropdown" onClick={this.handleClick}>
                            <img src={window.menu} />
                            <p className="menu">Menu</p>
                        </button>
                        <ul className={this.state.active ? "dropdown-options active" : "dropdown-options hidden"}> 
                            
                            <li className="li-clickable" onClick={this.handleLogout}>
                                <img src={window.menuLogout}/>
                                <p>Logout</p>
                            </li>
                            {/* <li className="li-clickable" onClick={this.handleLogout}>
                                Lunch
                            </li>
                            <li className="li-clickable" onClick={this.handleLogout}>
                                My Account
                            </li> */}

                        </ul>
                    
                    </div>
                </div>
            )
        }
        
        return (
            
            <nav>
                <Link to="/"><img className="logo" src={window.logoURL} /></Link>

                {navRight}

            </nav>

        )
    }
}

export default Nav