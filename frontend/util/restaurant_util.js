
    export const fetchRestaurants = (bounds) => {
        return $.ajax({
            method: "GET",
            url: '/api/restaurants',
            data: {bounds}
        })

    }
