import {RECEIVE_LUNCHES} from '../actions/lunches_actions'

const lunchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LUNCHES: 
            return action.lunches 
        default: 
            return state; 
    }
}

export default lunchesReducer