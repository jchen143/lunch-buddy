import React from 'react'

class ReservationIndex extends React.Component{
    constructor(props){
        super(props)
    }
    //get today's date. 

    componentDidMount(){
        debugger
        this.props.fetchLunches(); 
        debugger
        this.props.fetchReservations(); 
        
    
    }

    render(){
        debugger
        let that = this; 
        let reservationsLis = Object.values(this.props.reservations).map(reservation => {
           
            let lunch = that.props.lunches[reservation.lunch_id]; 
         
            let restaurant = that.props.restaurants[lunch.restaurant_id];
            debugger
            return <li>
               <div>{lunch.name}</div>
                <img src={lunch.photoUrl} />
                <p className="lunch-name">{lunch.name}</p>
                {/* <p>{lunch.description}</p> */}
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-address">{restaurant.address}</p>

            </li>
        })
        return(
            <>
                <ul>
                    {reservationsLis}
                </ul>
            </>
        )
    }
}

export default ReservationIndex 