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
import SignUpFormContainer from './session_form/signup_form_container';
import DemoContainer from './session_form/demo_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './search/search_container';
import ActivitiesContainer from './activities/activities_container';
import PlanetContainer from './planets/planet_container'
import RecentViewConatiner from './recent_views/recent_view_container';
import Modal from './modal/modal'
import SpotPlaceHolder from "./recent_views/spots_placeholder";
const App = () => (
    <>
    
    
    <header className="navbar">
            <Modal />
        <h2 className="nav-bar-logo">Moon Camp</h2>
        
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
            <AuthRoute exact path="/demo" component={DemoContainer} />
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

        
        <h1>EXPERIENCE SPACE</h1>
        <div className="activities-container">
            
            <ActivitiesContainer/>
        </div>
        <h1>FIND YOUR MOON</h1>
        <div className="activities-container">
            
            <PlanetContainer/>
        </div>


        <div className="moon-highlight">
            <div className="space-image">
                <div className="detail-container">
                    <h3>MEET THE PEQUENINOS ON TITAN</h3>
                    <p>Ender gives tours of the tree creatures</p>
                    <br/>
                    <center><button className=""> ENDERS GAME</button></center> 
                </div>
            </div>
        </div>
        <br/>  
            <h1>AVAILABLE NEXT WEEK</h1>
            <div className="activities-container">

                <Spot />
                <Spot />
                <Spot />
            </div>
            <br/>
            <div className="activities-container">

                <Spot />
                <Spot />
                <Spot />
            </div>
            <div className="host-review-container">
                <div className="worf-container">
                        <div className="worf">
                            
                        </div>
                    <div className="detail-container">
                        <h3>MEET THE BEST HOST... WORF</h3>
                        <p>"I am known to be a fierce warrior, but a dosile host. Come stay with me and enjoy Gagh: A Klingon delicacy, live serpent worms."</p>
                        <br />
                        <center><button className=""> CAMP OUT WITH WORF</button></center>
                    </div>
                </div>
            </div>
         
    </div>
    <footer  className="">
        
            made by michael wideburg with a lot of love and guidance from app academy
        <button className="help-button"> HELP </button>
    </footer>
    
    </>
);

export default App;