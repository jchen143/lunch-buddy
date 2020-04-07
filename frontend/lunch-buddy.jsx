import React from "react"; 
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/Root'
//import {signup, login, logout} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore(); 
    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    //TESTING
    
    ReactDOM.render(<Root store={store}/>, root);
});