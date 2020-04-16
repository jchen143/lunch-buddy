import React from "react";
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import { Route } from "react-router-dom";
import HomePageContainer from './home_page/home_page_container'
import LoginFormContainer from './forms/login_container'
import SignupFormContainer from './forms/signup_container'
import LunchesContainer from './lunches/lunches_container'
import Modal from './modal/modal'
import AccountContainer from './account/account_container'
import SearchContainer from './search/search_container'
//import the Lunches Container

const App = () => (
    <div>
        <Modal /> 
        <AuthRoute exact path = '/' component= {HomePageContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path = '/lunches' component={LunchesContainer} /> 
        <ProtectedRoute path ='/my-account' component={AccountContainer} /> 
        <ProtectedRoute path='/search_test' component={SearchContainer} /> 
    </div>
);

export default App;