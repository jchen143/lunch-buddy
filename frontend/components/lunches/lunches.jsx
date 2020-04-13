import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'
import LunchesIndex from './lunches_index'
import LunchMap from '../map/lunch_map'

class Lunches extends React.Component {

    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        this.props.fetchLunches();
        //this.props.fetchRestaurants({ southWest: { lat: 40.767971, lng: -73.981991 }, northEast: { lat: 40.799565, lng: -73.935342 } }); 
        //this.props.fetchRestaurants({ southWest: { lat: 40.7352421, lng: -73.9960729 }, northEast: { lat: 40.7352423, lng: -73.9960727} });
    }

    render(){
       
        return(
            
            <>
                <div className="lunches-home">
                    <div className="header-container">
                        <Nav/>
                    </div>

                    
                
                    <div className="lunches-content">
                        <LunchesIndex lunches={this.props.lunches} restaurants={this.props.restaurants} currentUserId={this.props.currentUser} createReservation={this.props.createReservation} errors={this.props.errors}/>  
                        <LunchMap location={this.props.location} restaurants={this.props.restaurants} updateFilter={this.props.updateFilter}/> 
                    </div>
                </div>
            </>
        )
    }
}

export default Lunches