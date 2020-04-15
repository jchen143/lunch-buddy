import React from 'react'

class ReservationError extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let res_id = parseInt(this.props.reservationId);
        let current_user_id = parseInt(this.props.currentUserId); 
        let temp_lunch_id = parseInt(this.props.tempLunchId)

        //debugger 

        this.props.cancelReservation(res_id).then(() => this.props.createReservation({ diner_id: current_user_id, lunch_id: temp_lunch_id }).then(() => this.props.openModal('successful_reservation')))
        
        //this.props.createReservation({ diner_id: current_user_id, lunch_id: temp_lunch_id }).then(() => this.props.openModal('successful_reservation') )
        //debugger
        //will need to change logic if you don't have enough remaining meals ... maybe make into a .then(successModal, no remaining meals)
        //this.props.openModal('successful_reservation')
       //debugger
        this.props.closeModal()
    }
    
    componentDidMount(){
        this.props.fetchReservations(); 
        
    }

    render(){
       // debugger
        return (<> 
            <div className="daily-limit-reached-modal-header">
                <div className="modal-close-x-error">
                    <p onClick={this.props.closeModal}>X</p>
                </div>
            </div>

            <img className="peas" src={window.peas} />

            <div className="daily-limit-modal-message">
                Peas-confirm!
            </div>
            <p className="daily-limit-warning">
                You already have a lunch reserved. Continue to cancel your past reservation and reserve this new lunch.
            </p>

            <div className="continue">
                <p onClick={this.handleClick}>Continue to make reservation</p>
            </div>
        
        </>)
    }
}

export default ReservationError