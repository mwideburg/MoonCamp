import { RECIEVE_BOOKING, REMOVE_BOOKING, RECIEVE_BOOKINGS } from '../actions/spot_actions'



const spotsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_BOOKING:
            
            return Object.assign({}, state, { [action.booking.id]: action.booking })
        case RECIEVE_BOOKINGS:

            return Object.assign({}, action.bookings.bookings)
        case REMOVE_BOOKING:
            
            let newState = Object.assign({}, state)
            delete newState[action.booking.id]
            return Object.assign({}, newState)
        default:
            return state;
    }

};

export default spotsReducer;