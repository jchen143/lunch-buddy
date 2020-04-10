import {combineReducers} from 'redux'; 
import filterReducer from './filters_reducer'

const uiReducer = combineReducers({
    filters: filterReducer
})

export default uiReducer