import * as APIUtil from '../util/spot_api_util'
import { getSpots, recieveSpots } from './spot_actions'

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS'

export const updateBounds = (bounds) => {
    // debugger
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export const updateSpots = (bounds) => dispatch => {
    // debugger
    APIUtil.getSpots(bounds).then(spots => dispatch(recieveSpots(spots)))
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