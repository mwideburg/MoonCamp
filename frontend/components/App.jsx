import React from "react";

import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';
// import Spot from './recent_views/spots_placeholder'
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container'
import LoginNavContainer from './nav/login_nav_container'
// import SignUpFormContainer from './session_form/signup_form_container';
// import DemoContainer from './session_form/demo_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import SignupSplashContainer from './session_form/signup_page_container';
// import SearchContainer from './search/search_container';
// import ActivitiesContainer from './activities/activities_container';
// import Example from './exmaple_transsition/example';
// import { CSSTransitionGroup } from 'react-transition-group'// ES6
// import PlanetContainer from './planets/planet_container'
import RecentViewConatiner from './recent_views/recent_view_container';
import Splash from './splash/splash_container';
import Modal from './modal/modal'
// import ReactCSSTransitionGroup from 'react-transition-group';
// import SpotPlaceHolder from "./recent_views/spots_placeholder";
import LoginSplash from "./session_form/login_splash_container";
// import SpotsIndex from "./spots/spots_container";
// import SpotsIndexContainer from "./spots/spots_container";
import SearchSpotsContainer from "./spots/search_spots_container";
import MoonMap from "./spots/moon_map"
import SearchSpotsMars from "./spots/search_spots_container_mars"
import SpotShow from "./spots/spot_show_container"
import BookingContainer from "./booking/booking_container"
import Profile from "./profile/user_profil_container"

// pass prop
import ReactDOM from 'react-dom'


const App = (props) => {
    
    return(
    <>
    
    {/* <header className="navbar">
        
             */}

                    
            <Modal />
        
        <Route exact path="/moonmap" component={MoonMap}/>
        <Route exact path="/marsmap" component={LoginNavContainer}/>
        <Route exact path="/marsmap" component={SearchSpotsMars}/>
        <Route exact path="/bookings/:bookingId" component={LoginNavContainer} />
        <Route exact path="/users/:userId" component={LoginNavContainer} />
        <Route exact path="/users/:userId/trips" component={LoginNavContainer} />
        <Route exact path="/users/:userId/saves" component={LoginNavContainer} />
        {/* <Route exact path="/users/:userId" component={LoginNavContainer} /> */}
            {/* <Link to="/" className="nav-bar-logo">
            <h2 >Moon Camp</h2>
            </Link> */}
        <Route exact path="/spots" component={LoginNavContainer} />       
               
        {/* <Route exact path="/spots/:spotsId" component={LoginNavContainer} />        */}
            <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <Route exact path="/spots/:spotId" component={LoginNavContainer} />
                <Route exact path="/bookings/:bookingId" component={BookingContainer} />
                <AuthRoute exact path="/login" component={LoginNavContainer} />
                
                <AuthRoute exact path="/signup" component={SignupSplashContainer} />
            </Switch>
        <Route path="/spots/:spotId" component={SpotShow} />
        <Route path="/users/:userId" component={Profile} />
{/*             
    </header> */}
        {/* <Route exact path="/spots" component={SpotsIndexContainer} /> */}
        <Route exact path="/spots" component={SearchSpotsContainer} />
            <Switch>
            {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/demo" component={DemoContainer} /> */}
            {/* <AuthRoute exact path="/recent_views" component={LogInFormContainer} /> */}
            <AuthRoute exact path="/login" component={LoginSplash} />
            <Route exact path="/" component={Splash} />
            </Switch>

        
            

         
    
    
    </>
)};



export default withRouter(App);