import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import { login, logout, signup} from './util/session_api_util';
import { login, logout } from './actions/session_actions';

import Root from './components/root'



document.addEventListener("DOMContentLoaded", () => {
    // attach current user to window for preloadedstate to not loose info
    // debugger
    let store;
    if (window.currentUser) {
        debugger
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
    // const store = configureStore()
    window.getState = store.getState
   
    // window.login = login;
    // window.logout = logout;
    // debugger
    ReactDOM.render(<Root store={store}/>, root);
});