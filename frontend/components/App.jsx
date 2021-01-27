import React from "react";
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container'
import LoginNavContainer from './nav/login_nav_container'
import SignupSplashContainer from './session_form/signup_page_container';
import Splash from './splash/splash_container';
import Modal from './modal/modal'
import LoginSplash from "./session_form/login_splash_container";

import SearchSpotsContainer from "./spots/search_spots_container";
import MoonMap from "./spots/moon_map"
import SearchSpotsMars from "./spots/search_spots_container_mars"
import SpotShow from "./spots/spot_show_container"
import BookingContainer from "./booking/booking_container"
import Profile from "./profile/user_profil_container"



const App = (props) => {
    
    return(
    <>         
        <Modal />
        <Route exact path="/moonmap" component={MoonMap}/>
        <Route exact path="/marsmap" component={LoginNavContainer}/>
        <Route exact path="/marsmap" component={SearchSpotsMars}/>
        <Route exact path="/bookings/:bookingId" component={LoginNavContainer} />
        <Route exact path="/users/:userId" component={LoginNavContainer} />
        <Route exact path="/users/:userId/trips" component={LoginNavContainer} />
        <Route exact path="/users/:userId/saves" component={LoginNavContainer} />
        <Route exact path="/spots" component={LoginNavContainer} />       

            <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <Route exact path="/spots/:spotId" component={LoginNavContainer} />
                <Route exact path="/bookings/:bookingId" component={BookingContainer} />
                <AuthRoute exact path="/login" component={LoginNavContainer} />
                
                <AuthRoute exact path="/signup" component={SignupSplashContainer} />
            </Switch>
        <Route path="/spots/:spotId" component={SpotShow} />
        <Route path="/users/:userId" component={Profile} />
        <Route exact path="/spots" component={SearchSpotsContainer} />
            <Switch>
            <AuthRoute exact path="/login" component={LoginSplash} />
            <Route exact path="/" component={Splash} />
            </Switch>
    
    </>
)};



export default withRouter(App);