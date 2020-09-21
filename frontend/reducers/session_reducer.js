import RECEIVE_CURRENT_USER from '../actions/session_actions'
import LOGOUT_CURRENT_USER from '../actions/session_actions'
import RECEIVE_SESSION_ERRORS from '../actions/session_actions'

const _nullUser = {
    currentUser: null,
};

const sessionReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id}
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return state;
    }
}

export default sessionReducer;