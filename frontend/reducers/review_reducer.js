import { RECIEVE_REVIEW } from '../actions/review_actions'



const reviewReducer = (state = {}, action) => {
    // 
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_REVIEW:
            // 
            return Object.assign({}, action.review);
        default:
            return state;
    }

};

export default reviewReducer;