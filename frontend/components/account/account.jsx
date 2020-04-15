import React from 'react'

class Account extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReservations();
        debugger
    }

    render(){
        debugger
        let lis = Object.values(this.props.reservations).map(reservation => {
            let lunch = reservation.lunch; 
            let restaurant = reservation.restaurant; 
            return (<li>
                <div className="item-header">Lunch</div>
                <img src={lunch.photoUrl} />
                <p className="lunch-name">{lunch.name}</p>
                {/* <p>{lunch.description}</p> */}
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-address">{restaurant.address}</p>

            </li>)

        })

        return (

            <ul>
                {lis}
            </ul>
           
        )
    }
}

export default Account 