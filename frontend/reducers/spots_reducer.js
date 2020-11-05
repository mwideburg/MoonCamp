import { RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions'
import {FILTER_SPOTS} from '../actions/filter_actions'


const spotsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOTS:
            // debugger
            return Object.assign({}, action.spots);
        case RECEIVE_SPOT:
            // debugger
            return Object.assign({}, { [action.spot.spot.id]: action.spot.spot });
        default:
            return state;
    }

};

export default spotsReducer;