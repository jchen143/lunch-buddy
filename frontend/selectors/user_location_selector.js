export const currentLocation = (state) => {
    let currentUserId = state.session.currentUserId; 

    let location = state.entities.users[currentUserId].location
    debugger
    return location
}

