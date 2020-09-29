import { combineReducers } from "redux";
import spots from './spots_reducer'
import users from "./users_reducer";
import host from "./host_reducer";



const entitiesReducer = combineReducers({
    users: users,
    spots: spots,
    host: host
    
});

export default entitiesReducer;