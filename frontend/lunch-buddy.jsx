import React from "react"; 
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/Root'
import {fetchLunches} from './util/lunch_util'
import {fetchRestaurants} from './util/restaurant_util'
//import {signup, login, logout} from "./util/session_api_util"
import {cancelReservation, createReservation} from './util/reservation_api_util'

document.addEventListener("DOMContentLoaded", () => {
    //TESTING
       window.cancelReservation = cancelReservation
        window.fetchRestaurants = fetchRestaurants
    //TESTING
   

    const root = document.getElementById("root");
    //const store = configureStore(); 
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    //TESTING
    
    ReactDOM.render(<Root store={store}/>, root);
});