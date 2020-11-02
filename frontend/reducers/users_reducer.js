import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECIEVE_BOOKING } from '../actions/spot_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }

};

export default usersReducer;