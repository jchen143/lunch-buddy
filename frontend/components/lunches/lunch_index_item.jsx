import React from 'react'
import ReservationForm from '../reservations/reservation_form'
const LunchIndexItem = (props) => {
    let { lunch, restaurant } = props; 
    

    return (
        <li className="lunch-li" key={lunch.id}>
            <ReservationForm currentUserId={props.currentUserId}
                createReservation={props.createReservation}
                lunch={lunch} errors={props.errors} 
                openModal ={props.openModal} 
                deleteReservationErrors={props.deleteReservationErrors}
                receiveTempLunchId={props.receiveTempLunchId}/>

            <div className="ken-ting-solution" id={`lunch-${lunch.restaurant_id.toString()}`}>
                <div className="item-header">Lunch</div>
                <img src={lunch.photoUrl} />
                <p className="lunch-name">{lunch.name}</p>
                {/* <p>{lunch.description}</p> */}
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-address">{restaurant.address}</p>
            </div>
            {/* <p>{lunch.size}</p> */}
           

        
            
        </li>
    )


}

export default LunchIndexItem