import React from 'react'

class ReservationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e){
        this.props.createReservation(this.state)
    }

    


    render(){
        let reservation = {diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id}
        
        let errors = null;
        if (this.props.errors.length > 0) {
            errors = this.props.errors.map((error, index) => {
                return <li key={index}>{error}</li>;
            })
        }
        //if errors = only 1 reservation every 24 hours, generate the you're out of reservations generate the other modal
        //if errors = no more reservations, generate out of meals modal 
       
        //debugger
        return(
            <div className="reservation-form">
                <div className="name-and-description" >
                    <div>{this.props.lunch.name}</div>
                    <div>{this.props.lunch.description}</div>
                </div>
                <button onClick={this.handleClick}>Reserve</button>
            </div>
        )
    }

}

export default ReservationForm 