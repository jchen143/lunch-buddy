import React from 'react'

class ReservationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e){
        
        this.props.createReservation(this.state).then(() => this.props.openModal('successful_reservation'))
        
    }
    

    render(){
        let reservation = {diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id}
        
        //let errors = null;
        if (this.props.errors.length > 0) {
            //debugger
            if (this.props.errors.includes("Daily limit You can only reserve one meal per day ")){
                //debugger
                this.props.openModal('daily_limit')
            }

            if (this.props.errors.includes("Remaining meals Insufficient amount of lunches remaining")){
                this.props.openModal('zero_meals')
            }
            this.props.deleteReservationErrors(); 
        } 
        // else{
        //     // this.props.openModal('successful_reservation')
        // }


        //if errors = only 1 reservation every 24 hours, generate the you're out of reservations generate the other modal
        //if errors = no more reservations, generate out of meals modal 
       
        //debugger
        return(
            <div className="reservation-form">
                <div className="name-and-description" >
                    <div className="hover-name">{this.props.lunch.name}</div>
                    <div className="hover-description">{this.props.lunch.description}</div>
                </div>
                <button onClick={this.handleClick}>Reserve</button>
            </div>
        )
    }

}

export default ReservationForm 