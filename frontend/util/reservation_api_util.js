export const createReservation = (reservation) => {
    return $.ajax({
        method: "POST",
        url: '/api/reservations',
        data: {reservation}
    })
}

export const cancelReservation = (reservationId) => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/reservations/${reservationId}`
    })

}

export const fetchReservations = () => {
    return $.ajax({
        method: "GET", 
        url: '/api/reservations'
    })
}

export const fetchReservation = (reservationId) => {
    return $.ajax({
        method: "GET", 
        url: `/api/reservations/${reservationId}`
    })
}