import {RECEIVE_ALL_RESTAURANTS} from '../actions/restaurants_actions'

const restaurantsReducer = (state = {}, action) => {

    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants 
        default:
            return state; 

    }

}

export default restaurantsReducer