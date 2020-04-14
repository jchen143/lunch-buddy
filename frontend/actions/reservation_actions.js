import * as ReservationApiUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const CANCEL_RESERVATION = "CANCEL_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const DELETE_RESERVATION_ERRORS = "DELETE_RESERVATION_ERRORS";

const receiveAllReservations = (reservations) => ({
    type: RECEIVE_ALL_RESERVATIONS, 
    reservations
})

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const deleteReservation = (reservationId) => ({
    type: CANCEL_RESERVATION,
    reservationId 
})

const receiveReservationErrors = (errors) => ({ //Errors come in an array
    type: RECEIVE_RESERVATION_ERRORS, 
    errors 
})

export const deleteReservationerrors = () => ({
    type: DELETE_RESERVATION_ERRORS
})

export const fetchReservations = () => (dispatch) => {

    return ReservationApiUtil.fetchReservations().then(reservations => dispatch(receiveAllReservations(reservations)))
}

export const fetchReservation = (reservationId) => (dispatch) => {
    return ReservationApiUtil.fetchReservation(reservationId).then(reservation => dispatch(receiveReservation(reservation)))
}

export const createReservation = (reservation) => (dispatch) => {
    //debugger
    return ReservationApiUtil.createReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)), err => dispatch(receiveReservationErrors(err)))
}

export const cancelReservation = (reservationId) => (dispatch) => {
    return ReservationApiUtil.cancelReservation(reservationId).then(reservation => dispatch(deleteReservation(reservation.id)))
}