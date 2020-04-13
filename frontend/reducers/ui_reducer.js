import {combineReducers} from 'redux'; 
import filterReducer from './filters_reducer'
import modal from './modal_reducer'

const uiReducer = combineReducers({
    filters: filterReducer,
    modal: modal
})

export default uiReducer