import { RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions'


const spotsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOTS:
            debugger
            return Object.assign({}, state, action.spots);
        case RECEIVE_SPOT:
            // debugger
            return Object.assign({}, state, { [action.id]: action.spot });
        default:
            return state;
    }

};

export default spotsReducer;