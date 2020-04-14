export const lastReservationId = (state) => {
    let reservations = state.entities.reservations;

    let keys = Object.keys(reservations); 

    let last_id = keys[keys.length - 1]; 

    return last_id 
}
