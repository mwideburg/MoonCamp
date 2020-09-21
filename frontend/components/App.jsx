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
const App = () => (
    <div>
        
        <h1>Moon Camp</h1>
        <GreetingContainer />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            
        
    </div>
);

export default App;