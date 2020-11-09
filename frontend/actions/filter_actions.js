import * as APIUtil from '../util/spot_api_util'
import { recieveSpot, recieveSpots } from './spot_actions'
import {filterSpots} from './spot_actions'
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const FILTER_SPOTS = 'FILTER_SPOTS'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const updateBounds = (bounds) => {
    // debugger
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}
export const updateFilters = (filter, value) => {
    // debugger
    return {
        type: UPDATE_FILTERS,
        filter,
        value
    }
}
export const removeAFilter = (filter, value) => {
    // debugger
    return {
        type: REMOVE_FILTER,
        filter,
        value
    }
}
export const recieveFilterSpots = (filter) => {
    return{
        type: FILTER_SPOTS,
        filter
    }
}


export const updateSpots = (bounds) => dispatch => {
    // debugger
    APIUtil.getSpots(bounds).then(spots => dispatch(recieveSpots(spots)))
}

export function updateSpotsFilters(filter, value) {
    
    
    return (dispatch, getState) => {
        dispatch(updateFilters(filter, value));
        return filterSpots(getState().ui.filters)(dispatch)
        // delicious curry!
    };
}
export function removeFilter(filter, value) {
    
    
    return (dispatch, getState) => {
        dispatch(removeAFilter(filter, value));
        return filterSpots(getState().ui.filters)(dispatch)
        // delicious curry!
    };
}
// export const updateFilters = () => {
//     return(dispatch, getState) => {
//         return dispatch()
//     }
// }
// export const updateFilters = bounds => dispatch => {
//     return APIUtil.updateFilters(spots => dispatch())
// }

// export function updateFilters(filter) {
//     return (dispatch, getState) => {
//         dispatch(changeFilters(filter));
//         return fetchBenches(getState().filters)(dispatch);
//         // delicious curry!
//     };
// }