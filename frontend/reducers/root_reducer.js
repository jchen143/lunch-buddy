import { combineReducers } from 'redux'
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducers'
//import uiReducer from './ui_reducer'
//ui: uiReducer

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
    

})

export default rootReducer