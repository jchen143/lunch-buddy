import React from 'react'

const LunchIndexItem = (props) => {
    let { lunch, restaurant } = props; 
    

    return (
        <li className="lunch-li" key={lunch.id}>
            <div className="item-header">Lunch</div>
            <img src={lunch.photoUrl} />
            <p className="lunch-name">{lunch.name}</p>
            {/* <p>{lunch.description}</p> */}
            <p className="restaurant-name">{restaurant.name}</p>
            <p className="restaurant-address">{restaurant.address}</p>
            {/* <p>{lunch.size}</p> */}
        </li>
    )


}

export default LunchIndexItem