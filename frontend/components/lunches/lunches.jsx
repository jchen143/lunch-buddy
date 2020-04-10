import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'
import LunchesIndexContainer from './lunches_index_container'
import LunchMap from './lunch_map'

class Lunches extends React.Component {

    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        this.props.fetchLunches();
        this.props.fetchRestaurants({ southWest: { lat: 40.767971, lng: -73.981991 }, northEast: { lat: 40.799565, lng: -73.935342 } }); 
    }

    render(){
        let testLis = Object.values(this.props.restaurants).map(restaurant => {
            return <li key={restaurant.id}>{restaurant.name}</li>
        })

        debugger
        return(
            
            <>
                <div className="lunches-home">
                    <div className="header-container">
                        <Nav/>
                    </div>

                    <ul>
                        {testLis}
                    </ul>
                
                    <LunchesIndexContainer/>  
                    <LunchMap location={this.props.location} restaurants={this.props.restaurants}/> 
                </div>
            </>
        )
    }
}

export default Lunches