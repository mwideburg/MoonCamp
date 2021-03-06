import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import { cancelBooking, getBookings, getUserSpots, getSpots, filterSpots, removeSave } from '../../actions/spot_actions'
import { getAmenities} from '../../actions/amenities_actions'

import Profile from "./user_profile";

const mapSTP = (state, ownProps) => {


    const bookings = state.entities.users[state.session.id].bookings
    const user = state.entities.users[state.session.id]
    const spots = state.entities.spots
    const amenities = Object.values(state.entities.amenities)
    
    
    // const host = state.entities.host[spot.host_id]

    return {
        user: user,
        bookings: bookings,
        spots: spots,
        amenities: amenities

    }
}
const mapDTP = dispatch => {
    // 
    return {
        getBookings: (userId) => dispatch(getBookings(userId)),
        getSpots: () => dispatch(getSpots()),
        filterSpots: (bookings) => dispatch(filterSpots(bookings)),
        getUserSpots: (bookings) => dispatch(getUserSpots(bookings)),
        cancelReservation: (booking) => dispatch(cancelBooking(booking)),
        getAmenities: () => dispatch(getAmenities()),
        removeSave: (save) => dispatch(removeSave(save))

    }
}

export default connect(mapSTP, mapDTP)(withRouter(Profile))