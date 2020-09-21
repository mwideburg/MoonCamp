import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup} from './util/session_api_util';




document.addEventListener("DOMContentLoaded", () => {
    // debugger
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    ReactDOM.render(<h1>moonCamp</h1>, root);
});