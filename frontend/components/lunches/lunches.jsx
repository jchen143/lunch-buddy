import React from 'react'; 
import Nav from '../nav_bar/nav'

class Lunches extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="header-container">
                    <Nav/>
                </div>

                <h1>Eat Up Homies!</h1>
                <button onClick={this.props.logout}>logout</button>
            </>
        )
    }
}

export default Lunches