import React from "react";
import ReactDOM from "react-dom";
import configureAppStore from "./store/store";
import { getSpots } from './actions/spot_actions'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    // attach current user to window for preloadedstate to not loose info
    // 
    
    let store;
    if (window.currentUser) {
        // store user and remove to stay logged in
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        
        store = configureAppStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureAppStore();
    }
    // grab the root element
    const root = document.getElementById('root');
    // const store = configureStore()
    window.getState = store.getState
    window.dispatch = store.dispatch;
    
    
    window.getSpots = getSpots();

    
    
    // 
    ReactDOM.render(<Root store={store}/>, root);
});