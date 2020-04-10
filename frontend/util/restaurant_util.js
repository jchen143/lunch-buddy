
    export const fetchRestaurants = (bounds) => {
        return $.ajax({
            method: "GET",
            url: '/api/lunches',
            data: {bounds}
        })

    }
