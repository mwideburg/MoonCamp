import { combineReducers } from "redux";

import modalReducer from "./modal_reducer";


const uiReducer = combineReducers({
    modalType: modalReducer,

});

export default uiReducer;