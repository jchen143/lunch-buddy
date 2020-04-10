import * as RestaurantApiUtil from '../util/restaurant_util'

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";

const receiveAllRestaurants = (restaurants) => {
    return {
        type: RECEIVE_ALL_RESTAURANTS, 
        restaurants
    }
}

export const fetchRestaurants = (bounds) => (dispatch) => {
    return RestaurantApiUtil.fetchRestaurants(bounds).then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
}