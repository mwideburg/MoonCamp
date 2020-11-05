import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECIEVE_BOOKING, RECIEVE_BOOKINGS, REMOVE_BOOKING } from '../actions/spot_actions'


const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECIEVE_BOOKINGS:
         
            let newBookings = Object.assign({}, state)
         
            newBookings[action.bookings.id].bookings = action.bookings.bookings
            return Object.assign({}, state, newBookings);
        case RECIEVE_BOOKING:
            
            let updateState = Object.assign({}, state)
            
            updateState[action.booking.user_id][bookings] = {[action.booking.id]: action.booking}
            return updateState;
        case REMOVE_BOOKING:
            let bookings = {}
            let newState = Object.assign({}, state)
            delete newState[action.booking.user_id].bookings[action.booking.id]
            return newState
        default:
            return state;
    }

};

export default usersReducer;