import { connect } from 'react-redux';

import { getSpot, getHost, requestBooking } from '../../actions/spot_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
// import getSpots from '../../actions/spot_actions'
import Booking from "./booking";

const mapSTP = (state, ownProps) => {
    // debugger
    const spotId = ownProps.match.params.spotId
    const spot = Object.values(state.entities.spots)[0]
    const booking = Object.values(state.entities.bookings)[0]
    const user_id = Object.values(state.session.id)[0]
    
    // const host = state.entities.host[spot.host_id]

    return {
        spot: spot,
        user_id: user_id,
        booking: booking

    }
}
const mapDTP = dispatch => {
    // debugger
    return {
        getSpot: (spotId) => dispatch(getSpot(spotId)),
        getHost: (hostId) => dispatch(getHost(hostId)),
        openModal: (ModalType) => dispatch(openModal(ModalType)),
        requestBooking: (booking) => dispatch(requestBooking(booking)),

    }
}

export default connect(mapSTP, mapDTP)(Booking)