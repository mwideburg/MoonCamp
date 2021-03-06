import { RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions'



const spotsReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOTS:

            return Object.assign({}, action.spots);
        case RECEIVE_SPOT:
            
            return Object.assign({}, { [action.spot.spot.id]: action.spot.spot });
        default:
            return state;
    }

};

export default spotsReducer;