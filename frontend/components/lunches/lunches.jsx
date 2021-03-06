import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'
import LunchesIndex from './lunches_index'
import LunchMap from '../map/lunch_map'
import ReservationIndexContainer from '../reservations/reservations_index_container'
import SearchContainer from '../search/search_container'

class Lunches extends React.Component {

    constructor(props){
        super(props)
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let today= new Date (); 
        this.reRender = this.reRender.bind(this);
        this.current_day = days[today.getDay()]
        
    }

    reRender() {
        this.forceUpdate();
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
                    

                    <div className="reservation-index">
                        <ReservationIndexContainer lunches={this.props.lunches} restaurants={this.props.restaurants}/> 
                    </div>

                    <div className="main-weekday">
                        {this.current_day}
                    </div>
                    
                    <div className="search-container">
                        <SearchContainer reRender={this.reRender} history={this.props.history}/> 
                    </div>

                    
                
                    <div className="lunches-content">
                        <LunchesIndex 
                        lunches={this.props.lunches} 
                        restaurants={this.props.restaurants} 
                        currentUserId={this.props.currentUser} 
                        createReservation={this.props.createReservation} 
                        errors={this.props.errors} 
                        openModal ={this.props.openModal}
                        deleteReservationErrors={this.props.deleteReservationErrors}
                        receiveTempLunchId = {this.props.receiveTempLunchId}/>  

                        
                        <LunchMap location={this.props.location} restaurants={this.props.restaurants} updateFilter={this.props.updateFilter}/> 
                    </div>
                </div>
            </>
        )
    }
}

export default Lunches