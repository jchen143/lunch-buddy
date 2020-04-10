export const RECEIVE_LUNCHES = "RECEIVE_LUNCHES"
import * as LunchApiUtil from '../util/lunch_util'

const receiveLunches = (lunches) =>{
    return{
        type: RECEIVE_LUNCHES,
        lunches
    }
}

export const fetchLunches = () => dispatch => {
    return LunchApiUtil.fetchLunches().then(lunches => dispatch(receiveLunches(lunches)))
}