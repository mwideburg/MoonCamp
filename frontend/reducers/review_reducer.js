import { RECIEVE_REVIEW } from '../actions/review_actions'



const reviewReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_REVIEW:
            // debugger
            return Object.assign({}, action.review);
        default:
            return state;
    }

};

export default reviewReducer;