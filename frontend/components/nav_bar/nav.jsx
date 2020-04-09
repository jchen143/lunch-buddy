import React from 'react'
import { Link } from 'react-router-dom'

//MAKE THE NAV VARIABLE BASED ON IF LOGGED IN OR NOT CONTAINER TAKES IN SESSION ID

class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        let navRight;
        
        if (!this.props.loggedIn){
            navRight = <Link className="home-login-container" to='/login'>Log In</Link>
        }else{
            navRight = (
                <ul>
                    <li>
                        <i className="fas fa-bars" ></i>
                        <p>Menu</p>
                    </li>
                </ul>
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