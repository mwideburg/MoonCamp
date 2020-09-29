import { RECEIVE_HOST, RECIEVE_HOST } from '../actions/spot_actions'


const hostReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_HOST:
            // debugger
            return Object.assign({}, action.host);
        
        default:
            return state;
    }

};

export default hostReducer;