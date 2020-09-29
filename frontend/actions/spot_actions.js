import * as APIUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECIEVE_HOST = 'RECIEVE_HOST';

export const recieveSpots = (spots) => {
    // debugger
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
export const recieveHost = (host) => {
    // debugger
    return {
        type: RECIEVE_HOST,
        host
    }
}


export const getSpots = (bounds) => dispatch => {
    debugger
    return (
        
        APIUtil.filterSpots(bounds).then(spots => (
            dispatch(recieveSpots(spots))
        ))
    )
};
export const getHost = (hostId) => dispatch => {
    debugger
    return (
        
        APIUtil.getHost(hostId).then(host => (
            dispatch(recieveHost(host))
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
