import React from 'react'

const LunchIndexItem = (props) => {
    let { lunch, restaurant } = props; 
    

    return (
        <li className="lunch-li" key={lunch.id}>
            <div className="item-header">Lunch</div>
            <img src={lunch.photoUrl} />
            <p>{lunch.name}</p>
            {/* <p>{lunch.description}</p> */}
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            {/* <p>{lunch.size}</p> */}
        </li>
    )


}

export default LunchIndexItem