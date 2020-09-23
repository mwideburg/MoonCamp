import { RECEIVE_USER_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'



const userErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_USER_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default userErrorsReducer;