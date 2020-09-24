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
import SearchContainer from './search/search_container';
import ActivitiesContainer from './activities/activities_container';
import PlanetContainer from './planets/planet_container'
import RecentViewConatiner from './recent_views/recent_view_container';
import Splash from './splash/spash_conatiner';
import Modal from './modal/modal'
import SpotPlaceHolder from "./recent_views/spots_placeholder";
import LoginSplash from "./session_form/login_splash_container";
const App = () => (
    <>
    
    
    <header className="navbar">
            <Modal />
            <Link to="/">
            <h2 className="nav-bar-logo">Moon Camp</h2>
            </Link>
            <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <AuthRoute exact path="/login" component={LoginNavContainer} />
            </Switch>
      
    </header>

            <Switch>
            {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/demo" component={DemoContainer} /> */}
            {/* <AuthRoute exact path="/recent_views" component={LogInFormContainer} /> */}
            <AuthRoute exact path="/login" component={LoginSplash} />
            <AuthRoute exact path="/signup" component={LoginSplash} />
            <Route exact path="/" component={Splash} />
            </Switch>
    
    <footer  className="">
        
            made by michael wideburg with a lot of love and guidance from app academy
        <button className="help-button"> HELP </button>
    </footer>
    
    </>
);

export default App;