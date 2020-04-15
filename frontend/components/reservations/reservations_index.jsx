import React from 'react'

class ReservationIndex extends React.Component{
    constructor(props){
        super(props)
    }
    //get today's date. 

    componentDidMount(){
    
        this.props.fetchReservations(); 
        
    
    }

    render(){
        debugger
    
        let that = this; 
        let reservationsLis = Object.values(this.props.reservations).map(reservation => {
           
            let lunch = reservation.lunch;
         
            let restaurant = reservation.restaurant;
        
            return (<li className="current-res-li">
               <div className="current-res-title">Today's Lunch!</div>

                <div className="res-info" style={{backgroundImage: `url(${lunch.photoUrl})`}}>
                    {/* <img src={lunch.photoUrl} />  */}
                    <p className="lunch-name">{lunch.name}</p>
                    <p className="restaurant-name">{restaurant.name}</p>
                    <p className="restaurant-address">{restaurant.address}</p>
                </div>
                <button>Cancel</button>
            </li>)
        })
        return(
            <>
                <ul className="current-res-toolbar">
                    {reservationsLis}
                </ul>
            </>
        )
    }
}

export default ReservationIndex 