import * as APIUtil from '../util/spot_api_util'
import { recieveSpots } from './spot_actions'
import {filterSpots} from './spot_actions'
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const FILTER_SPOTS = 'FILTER_SPOTS'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const REMOVE_FILTERS = 'REMOVE_FILTERS'
export const ONE_FILTER = 'ONE_FILTER'

export const updateBounds = (bounds) => {
    // 
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}
export const updateFilters = (filter, value) => {
    // 
    return {
        type: UPDATE_FILTERS,
        filter,
        value
    }
}
export const onlyOneFilter = (filter, value) => {
    // 
    return {
        type: ONE_FILTER,
        filter,
        value
    }
}
export const clearFilters = () => {
    return{type: REMOVE_FILTERS}
}
export const removeAFilter = (filter, value) => {
    // 
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
    // 
    APIUtil.getSpots(bounds).then(spots => dispatch(recieveSpots(spots)))
}

export function updateSpotsFilters(filter, value) {
    
    
    return (dispatch, getState) => {
        dispatch(updateFilters(filter, value));
        return filterSpots(getState().ui.filters)(dispatch)
        // delicious curry!
    };
}
export function updateOneFilter(filter, value) {
    
    
    return (dispatch, getState) => {
        dispatch(onlyOneFilter(filter, value));
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
