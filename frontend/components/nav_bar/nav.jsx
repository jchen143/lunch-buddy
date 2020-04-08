import React from 'react'
import { Link } from 'react-router-dom'

//MAKE THE NAV VARIABLE BASED ON IF LOGGED IN OR NOT CONTAINER TAKES IN SESSION ID

const Nav = (props) => {
    //debugger
    return (
        
        <nav>
            <Link to="/"><img className="logo" src={window.logoURL} /></Link>

            <Link className="home-login-container" to='/login'>Log In</Link>

        </nav>

    )
}

export default Nav