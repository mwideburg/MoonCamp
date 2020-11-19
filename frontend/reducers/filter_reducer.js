import { UPDATE_BOUNDS, UPDATE_FILTERS, FILTER_SPOTS, REMOVE_FILTER, REMOVE_FILTERS, ONE_FILTER } from '../actions/filter_actions'
const defaultFilters = Object.freeze({
    bounds: {},
    
});
const filterReducer = (state = defaultFilters, action) => {
    Object.freeze(state)
    // 
    switch (action.type) {
        case UPDATE_BOUNDS:
            // 
            return Object.assign({}, state, action.bounds)
        case UPDATE_FILTERS:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case ONE_FILTER:
            
            const one_filter = {
                [action.filter]: action.value
            };
            return Object.assign({}, one_filter);
        case REMOVE_FILTER:
            const copy = Object.assign({}, state)
            delete copy[action.filter]
            return Object.assign({}, copy);
        case REMOVE_FILTERS:
            
            return Object.assign({}, copy);
        case FILTER_SPOTS:
            // 
            return Object.assign({}, state, action.filter)
        default:
            return state
    }
}

export default filterReducer
