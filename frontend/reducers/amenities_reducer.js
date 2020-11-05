
import { RECIEVE_AMENITIES } from '../actions/amenities_actions'



const amenitiesReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_AMENITIES:

            return Object.assign({}, state, action.amenities)
        default:
            return state;
    }

};

export default amenitiesReducer;