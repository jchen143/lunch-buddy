import React from 'react'

class ReservationError extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.closeModal(); 
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
                You already have a meal reserved. Continue to cancel your meal and reserve this meal.
            </p>

            <div className="continue">
                <p onClick={this.props.closeModal}>Continue to reserve meal</p>
            </div>
        
        </>)
    }
}

export default ReservationError