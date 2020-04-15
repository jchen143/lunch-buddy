import React from 'react'
import { Link } from 'react-router-dom'

//MAKE THE NAV VARIABLE BASED ON IF LOGGED IN OR NOT CONTAINER TAKES IN SESSION ID

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

        let navRight;
        
        if (!this.props.loggedIn){
            navRight = <Link className="home-login-container" to='/login'>Log In</Link>
        }else{
            navRight = (

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