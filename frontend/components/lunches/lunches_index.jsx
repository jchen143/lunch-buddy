import React from 'react';
import LunchIndexItem from './lunch_index_item'

class LunchesIndex extends React.Component{
    constructor(props){
        super(props)
    
    }
    
    render(){
        let restaurants = this.props.restaurants
        let that = this;
        debugger
        let lunches = this.props.lunches.map(lunch => {
            //debugger
            if (Object.keys(restaurants).includes((lunch.restaurant_id).toString())){
                //return <li key={lunch.id}>{lunch.name} {lunch.description}</li>
                //debugger
                return <LunchIndexItem lunch={lunch} restaurant={restaurants[lunch.restaurant_id.toString()]} currentUserId={that.props.currentUserId} createReservation={that.props.createReservation} errors={that.props.errors} openModal ={that.props.openModal}
                deleteReservationErrors={that.props.deleteReservationErrors}
                    receiveTempLunchId={that.props.receiveTempLunchId}/> 
            }
        })

        let isUndefined = (currentValue) => currentValue === undefined; 
        let return_value;
        let className; 

        if(lunches.every(isUndefined)){
            lunches = ( <div className="no-meals-messaging">
                <div className="to-center">
                    <div className="sorry-message-index">Sorry, no meals found.</div>
                    <p className="please-try">Please try the following:</p> 
                    <ul className="no-meals-ul-search"> 
                            <li>Zoom out the map</li>
                            <li>Search for something else</li>
                    </ul> 
                </div>
            </div>)
            className="no-meals-found"
        }else{
            className="lunch-index-ul"
        }
       
        debugger
        
        return(
            <ul className={className}>
                {lunches}
            </ul>
          
           
        )
    }
}

export default LunchesIndex