import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import { login, logout, signup} from './util/session_api_util';
import { login, logout } from './actions/session_actions';

import Root from './components/root'



document.addEventListener("DOMContentLoaded", () => {
    // attach current user to window for preloadedstate to not loose info
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    // grab the root element
    const root = document.getElementById('root');
    
    // window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
   
    window.login = login;
    // window.logout = logout;
    ReactDOM.render(<Root store={store}/>, root);
});