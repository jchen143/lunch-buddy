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

        if(lunches.every(isUndefined)){
            lunches = <li>No Results Found</li>
        }
       
        debugger
        
        return(
            <ul className="lunch-index-ul">
                {lunches}
            </ul>

        )
    }
}

export default LunchesIndex