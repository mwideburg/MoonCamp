import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECIEVE_BOOKING, RECIEVE_BOOKINGS, REMOVE_BOOKING, RECIEVE_SAVE, RECIEVE_SAVES, REMOVE_SAVE } from '../actions/spot_actions'

const startState = {
    saved: {},
    bookings: {},
}
const usersReducer = (state = startState, action) => {
    const user = action.currentUser
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
           
            
            if(user.bookings === undefined){
                
                user.bookings = Object.assign({})
            }
            if(user.saved === undefined){
                user.saved = Object.assign({})

            }
            return Object.assign({}, state, { [action.currentUser.id]: user });
        case RECIEVE_BOOKINGS:
            console.log("action.bookings.bookings", action.bookings)
            let newBookings = Object.assign({}, state)
           
            
            newBookings[action.bookings.id].bookings = action.bookings.bookings
            return Object.assign({}, state, newBookings);
        case RECIEVE_BOOKING:
            let updateState = Object.assign({}, state)
            
            
            console.log("action.bookings.booking", action.bookings.booking)
            updateState[action.booking.user_id].bookings[action.booking.id] =  action.booking
            return updateState;
        case RECIEVE_SAVE:
            
            let newSave = Object.assign({}, state)
            
            newSave[action.save.user_id].saved[action.save.id] =  action.save
            return newSave;
        case RECIEVE_SAVES:
            
            let newSaves = Object.assign({}, state)
            
            newSave[action.save.user_id].saved =  action.saves
            return newSave;
        case REMOVE_SAVE:
            
            let delSave = Object.assign({}, state)
            
            delete  delSave[action.save.user_id].saved[action.save.id]
            return delSave;
        case REMOVE_BOOKING:
            
            
            let newState = Object.assign({}, state)
            delete newState[action.booking.user_id].bookings[action.booking.id]
            return newState
        default:
            return state;
    }

};

export default usersReducer;