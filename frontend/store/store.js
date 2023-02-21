import { applyMiddleware } from 'redux';
import {configureStore} from "@reduxjs/toolkit"
// import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";
const reducers = {
  reducer: rootReducer,
}
const configureAppStore = (preloadedState = {}) =>
    configureStore(reducers, preloadedState, applyMiddleware(thunk));

export default configureAppStore;