import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'

class Lunches extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="lunches-home">
                    <div className="header-container">
                        <Nav/>
                    </div>

                    <br></br>
                    <div className="content">
                        <h1>Eat Up Homies!</h1>
                        <button onClick={this.props.logout}>logout</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Lunches