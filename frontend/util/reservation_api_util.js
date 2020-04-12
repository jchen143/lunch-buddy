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