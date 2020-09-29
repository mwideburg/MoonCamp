import React from "react";

import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Spot from './recent_views/spots_placeholder'
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container'
import LoginNavContainer from './nav/login_nav_container'
import SignUpFormContainer from './session_form/signup_form_container';
import DemoContainer from './session_form/demo_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SignupSplashContainer from './session_form/signup_page_container';
import SearchContainer from './search/search_container';
import ActivitiesContainer from './activities/activities_container';
import Example from './exmaple_transsition/example';
import { CSSTransitionGroup } from 'react-transition-group'// ES6
import PlanetContainer from './planets/planet_container'
import RecentViewConatiner from './recent_views/recent_view_container';
import Splash from './splash/spash_conatiner';
import Modal from './modal/modal'
import ReactCSSTransitionGroup from 'react-transition-group';
import SpotPlaceHolder from "./recent_views/spots_placeholder";
import LoginSplash from "./session_form/login_splash_container";
import SpotsIndex from "./spots/spots_container";
import SpotsIndexContainer from "./spots/spots_container";
import SearchSpotsContainer from "./spots/search_spots_container";
import MoonMap from "./spots/moon_map"

const App = () => (
    <>
    
    {/* <header className="navbar">
        
             */}

                    
            <Modal />
        <Route path="/moonmap" component={MoonMap}/>
            {/* <Link to="/" className="nav-bar-logo">
            <h2 >Moon Camp</h2>
            </Link> */}
        <Route exact path="/spots" component={LoginNavContainer} />       
            <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <AuthRoute exact path="/login" component={LoginNavContainer} />
                
                <AuthRoute exact path="/signup" component={SignupSplashContainer} />
            </Switch>
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
);

export default App;