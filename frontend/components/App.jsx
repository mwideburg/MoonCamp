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
import RecentViewConatiner from './recent_views/recent_view_container';
const App = () => (
    <>
    <header className="navbar">
        
        <h1 className="nav-bar-logo">Moon Camp</h1>
        
        <GreetingContainer />

      
    </header>

    <div className="splash-container">
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
            {/* <AuthRoute exact path="/recent_views" component={LogInFormContainer} /> */}
                   
            </Switch>
            </div>
        <div className="search">
            <SearchContainer />
        </div>
        


        <div>
            {/* RECENET VIEWS */}
            <div className="recent-views">
                    <RecentViewConatiner />
            </div>
        </div>

        <div className="space-container">
             <div className="space-image">
                    <p>EXPLORE YOUR DESTINY</p> 
            </div>
        </div>

        <div>
            <section className="discover-planets">

            </section>
        </div>
        <h1>EXPERIENCE SPACE</h1>
        <div className="activities-container">
            
            <ActivitiesContainer/>
        </div>
    </div>
    <section id="overlay" className="overlay hidden"></section>
    
    </>
);

export default App;