import { combineReducers } from "redux";
import spots from './spots_reducer'
import users from "./users_reducer";
import host from "./host_reducer";
import bookings from "./booking_reducer";
import amenities from "./amenities_reducer.js";



const entitiesReducer = combineReducers({
    users: users,
    spots: spots,
    host: host,
    bookings: bookings,
    amenities: amenities
    
});

export default entitiesReducer;