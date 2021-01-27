import { connect } from 'react-redux';

import { getSpot, getHost, requestBooking, cancelBooking, getBookings } from '../../actions/spot_actions'
import { openModal } from '../../actions/modal_actions'
import { getAmenities } from '../../actions/amenities_actions'
import Booking from "./booking";

const mapSTP = (state, ownProps) => {
    
    
    const user_id = state.session.id
    const bookingId = ownProps.match.params.bookingId
    const booking = state.entities.users[user_id].bookings[bookingId]
    const spot = state.entities.users[user_id].bookings[bookingId].spot
    const host = state.entities.host

    return {
        spot: spot,
        user_id: user_id,
        booking: booking,
        host: host,

    }
}
const mapDTP = dispatch => {
    // 
    return {
        getSpot: (spotId) => dispatch(getSpot(spotId)),
        getHost: (hostId) => dispatch(getHost(hostId)),
        openModal: (ModalType) => dispatch(openModal(ModalType)),
        requestBooking: (booking) => dispatch(requestBooking(booking)),
        getAmenities: () => dispatch(getAmenities()),
        getBookings: (userId) => dispatch(getBookings(userId)),
        cancelReservation: (booking) => dispatch(cancelBooking(booking))

    }
}

export default connect(mapSTP, mapDTP)(Booking)