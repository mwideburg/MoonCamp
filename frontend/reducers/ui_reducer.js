import { combineReducers } from "redux";

import modalReducer from "./modal_reducer";
import filterReducer from "./filter_reducer";

const uiReducer = combineReducers({
    filters: filterReducer,
    modalType: modalReducer,
    

});

export default uiReducer;