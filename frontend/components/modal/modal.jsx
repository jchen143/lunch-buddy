import React from 'react';
import {closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import ReservationErrorContainer from '../reservations/reservation_errors_container'
import SuccessfulReservationContainer from '../reservations/successful_reservation_container'

function Modal({ modal, closeModal }) {
    //debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'daily_limit':
            //debugger
            component = <ReservationErrorContainer />;
            break;
        case 'successful_reservation':
            //debugger
            component = <SuccessfulReservationContainer /> 
            //component = <ReservationErrorContainer />;
            break;
            
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => { //APss in lunch through ownprops to force the cancelllation and order?? 
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);