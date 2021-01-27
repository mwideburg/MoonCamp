import { RECIEVE_HOST } from '../actions/spot_actions'


const hostReducer = (state = {}, action) => {
    // 
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_HOST:
            // 
            return Object.assign({}, action.host);
        
        default:
            return state;
    }

};

export default hostReducer;