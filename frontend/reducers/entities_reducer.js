import { combineReducers } from "redux";
import spots from './spots_reducer'
import users from "./users_reducer";



const entitiesReducer = combineReducers({
    users: users,
    spots: spots
    
});

export default entitiesReducer;