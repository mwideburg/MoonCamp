import { UPDATE_BOUNDS } from '../actions/filter_actions'

const filterReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger
    switch (action.type) {
        case UPDATE_BOUNDS:
            // debugger
            return Object.assign({}, state, action.bounds)
        default:
            return state
    }
}

export default filterReducer
