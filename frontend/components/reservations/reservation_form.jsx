import React from 'react'

class ReservationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e){
        e.preventDefault(); 
        this.props.receiveTempLunchId(this.props.lunch.id)
        this.props.createReservation(this.state).then(() => this.props.openModal('successful_reservation')
        )
       
        
    }
    

    render(){
        let reservation = {diner_id: this.props.currentUserId, lunch_id: this.props.lunch.id}
        
        if (this.props.errors.length > 0) {
           
            if (this.props.errors.includes("Daily limit You can only reserve one meal per day ")){
                
                this.props.openModal('daily_limit')
            }

            if (this.props.errors.includes("Remaining meals Insufficient amount of lunches remaining")){
                this.props.openModal('zero_meals')
            }
            this.props.deleteReservationErrors(); 
        } 
       
       
     
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
