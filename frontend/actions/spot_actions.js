import * as APIUtil from '../util/spot_api_util'
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECIEVE_HOST = 'RECIEVE_HOST';
export const RECIEVE_BOOKING = 'RECIEVE_BOOKING';
export const RECIEVE_BOOKINGS = 'RECIEVE_BOOKINGS';
export const RECIEVE_SAVE = 'RECIEVE_SAVE';
export const REMOVE_SAVE = 'REMOVE_SAVE';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const recieveSpots = (spots) => {
    
    return {
        type: RECEIVE_SPOTS,
        spots
    }
}
export const recieveSpot = (spot) => {
    
    return {
        type: RECEIVE_SPOT,
        spot
    }
}
export const recieveHost = (host) => {
    // 
    return {
        type: RECIEVE_HOST,
        host
    }
}

export const recieveBooking = (booking) => {
    debugger
    return{
        type: RECIEVE_BOOKING,
        booking
    }
}
export const recieveSave = (save) => {
    return{
        type: RECIEVE_SAVE,
        save
    }
}
export const deleteSave = (save) => {
    return{
        type: REMOVE_SAVE,
        save
    }
}

export const recieveBookings = (bookings) => {
    return{
        type: RECIEVE_BOOKINGS,
        bookings
    }
}
export const deleteBooking = (booking) => {

    return{
        type: REMOVE_BOOKING,
        booking
    }
}

export const getSpots = (bounds) => dispatch => {
   

    return (
        
        APIUtil.filterSpots(bounds).then(spots => (
            dispatch(recieveSpots(spots))
        ))
    )
};
export const filterSpots = (filter) => dispatch => {
    

    return (
        
        APIUtil.filterAmenSpots(filter).then(spots => (
            dispatch(recieveSpots(spots))
        ))
    )
};
export const getHost = (hostId) => dispatch => {
    // 
    return (
        
        APIUtil.getHost(hostId).then(host => (
            dispatch(recieveHost(host))
        ))
    )
};
export const getSpot = (spotId) => dispatch => {
    return APIUtil.getSpot(spotId).then(spot => {
        // 
        return dispatch(recieveSpot(spot))
    })
};
export const getUserSpots = (bookings) => dispatch => {
   
    return APIUtil.getUserSpots(bookings).then(spots => {
       
        return dispatch(recieveSpots(spots))
    })
};

export const requestBooking = (booking) => dispatch => {
    debugger
    return APIUtil.requestBooking(booking).then(booking => {
        
        return dispatch(recieveBooking(booking))
    })
}
export const saveSpot = (save) => dispatch => {
    
    return APIUtil.createSave(save).then(user => {
        
        return dispatch(recieveSave(user))
    })
}
export const removeSave = (save) => dispatch => {
    return APIUtil.deleteSave(save).then(save => {
        return dispatch(deleteSave(save))
    })
}

export const cancelBooking = (booking) => dispatch => {
    
    return APIUtil.cancelBooking(booking).then(booking => {
     
        return dispatch(deleteBooking(booking))
    })
}

export const getBookings = (user) => dispatch => {
    return APIUtil.getBookings(user).then(user => {
        return dispatch(recieveBookings(user))
    })
}

