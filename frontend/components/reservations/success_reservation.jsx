import React from 'react'

class SuccessReservation extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.closeModal();
    }


    render() {
       
        return (
            //<div className="modal-form">
            <>
                <div className="success-modal-header">
                    <div className="sneaky"></div>
                    <div className="modal-title">Lunch Reserved!</div>
                    <div className="modal-close-x">
                        <p onClick={this.props.closeModal}>X</p>
                    </div>
                </div>

                <img src={window.red_bag} />

                <div className="success-modal-message">
                    Get ready to lunch, bud!
                </div>
                
                <div className="sounds-good">
                    <p onClick={this.props.closeModal}>Sounds Good</p>
                </div>
                
            </>  
            //</div>

        )
    }
}

export default SuccessReservation