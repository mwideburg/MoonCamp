import { connect } from 'react-redux';

import { getSpot, getHost, requestBooking, cancelBooking, getBookings } from '../../actions/spot_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import { getAmenities } from '../../actions/amenities_actions'
// import getSpots from '../../actions/spot_actions'
import Booking from "./booking";

const mapSTP = (state, ownProps) => {
    
    const spotId = ownProps.match.params.spotId
    const spot = Object.values(state.entities.spots)[0]
    const booking = Object.values(state.entities.bookings)[0]
    const user_id = Object.values(state.session.id)[0]
    const amenities = Object.values(state.entities.amenities)
    const host = state.entities.host
    
    // const host = state.entities.host[spot.host_id]

    return {
        spot: spot,
        user_id: user_id,
        booking: booking,
        host: host,
        amenities: amenities

    }
}
const mapDTP = dispatch => {
    // debugger
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