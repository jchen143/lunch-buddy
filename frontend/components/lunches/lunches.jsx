import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'
import LunchesIndex from './lunches_index'
import LunchMap from './lunch_map'

class Lunches extends React.Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchLunches();
    }

    render(){
        
        return(

            <>
                <div className="lunches-home">
                    <div className="header-container">
                        <Nav/>
                    </div>
                
                    <LunchesIndex lunches={this.props.lunches}/>  
                    <LunchMap location={this.props.location}/> 
                </div>
            </>
        )
    }
}

export default Lunches