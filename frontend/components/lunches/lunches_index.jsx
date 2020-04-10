import React from 'react';
import LunchIndexItem from './lunch_index_item'

class LunchesIndex extends React.Component{
    constructor(props){
        super(props)
    
    }
    
    render(){
        let restaurants = this.props.restaurants
        let lunches = this.props.lunches.map(lunch => {
            //debugger
            if (Object.keys(restaurants).includes((lunch.restaurant_id).toString())){
                //return <li key={lunch.id}>{lunch.name} {lunch.description}</li>
                return <LunchIndexItem lunch={lunch} restaurant= {restaurants[lunch.restaurant_id.toString()]}/> 
            }
        })
       
        
        return(
            <ul className="lunch-index-ul">
                {lunches}
            </ul>

        )
    }
}

export default LunchesIndex