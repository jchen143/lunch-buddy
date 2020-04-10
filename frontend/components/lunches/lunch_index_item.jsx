import React from 'react'

const LunchIndexItem = (props) => {
    let { lunch, restaurant } = props; 
    

    return (
        <li className="lunch-li" key={lunch.id}>
            <div className="item-header">Lunch</div>
            <p>{lunch.name}</p>
            <p>{lunch.description}</p>
            <p>{lunch.size}</p>
            <p>{lunch.image_url}</p>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
        </li>
    )


}

export default LunchIndexItem