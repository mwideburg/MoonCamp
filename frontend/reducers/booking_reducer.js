import { RECIEVE_BOOKING } from '../actions/spot_actions'



const spotsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_BOOKING:

            return Object.assign({}, state, { [action.booking.id]: action.booking })
        default:
            return state;
    }

};

export default spotsReducer;