import { UPDATE_BOUNDS, UPDATE_FILTERS, FILTER_SPOTS } from '../actions/filter_actions'

const filterReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger
    switch (action.type) {
        case UPDATE_BOUNDS:
            // debugger
            return Object.assign({}, state, action.bounds)
        case UPDATE_FILTERS:
            // debugger
            return Object.assign({}, action.filter)
        case FILTER_SPOTS:
            // debugger
            return Object.assign({}, state, action.filter)
        default:
            return state
    }
}

export default filterReducer
