
    export const fetchRestaurants = (bounds) => {
        return $.ajax({
            method: "GET",
            url: '/api/restaurants',
            data: {bounds}
        })

    }

export const searchRestaurants = (search, bounds) => {
    //debugger
    return $.ajax({
        method: "GET",
        url: '/api/restaurants',
        data: { search, bounds }
    })
}
