import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './search/search_container';
import ActivitiesContainer from './activities/activities_container';
const App = () => (
    <>
    <header className="navbar">
        
        <h1 className="nav-bar-logo">Moon Camp</h1>

        
        
        <GreetingContainer />
    </header>



        <div className="modal-container">
            <div className="elevator-container">

            <div className="elevator-pitch">
                <h1>WELCOME TO MOONCAMP</h1>
                <h3>
                    Camp out on your favorite moon and gaze into the universe, seeing stars with unrelenting clarity.
                </h3>
        </div>
                
            </div>
            <Switch>
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            {/* <Route exact path="/" component={SearchContainer} /> */}
            </Switch>
            </div>
        <div className="search">
            <SearchContainer />
        </div>
        <h1>EXPERIENCE SPACE</h1>
        <div className="activities-container">
            
            <ActivitiesContainer/>
        </div>
    </>
);

export default App;