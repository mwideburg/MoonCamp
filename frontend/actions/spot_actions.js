import * as APIUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const recieveSpots = (spots) => {
    debugger
    return {
        type: RECEIVE_SPOTS,
        spots
    }
}
export const recieveSpot = (spot) => {
    // debugger
    return {
        type: RECEIVE_SPOT,
        spot
    }
}


export const getSpots = () => dispatch => {
    // debugger
    return (
        
        APIUtil.getSpots().then(spots => (
            dispatch(recieveSpots(spots))
        ))
    )
};
export const getSpot = (spotId) => dispatch => {
    // debugger
    return APIUtil.getSpot(spotId).then(spot => {
        // debugger
        return dispatch(recieveSpot(spot))
    })
};