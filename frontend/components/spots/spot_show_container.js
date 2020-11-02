import { connect } from 'react-redux';

import { getSpot, getHost, requestBooking } from '../../actions/spot_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
// import getSpots from '../../actions/spot_actions'
import SpotShow from "./spot_show";

const mapSTP = (state, ownProps) => {
    // debugger
    const spotId = ownProps.match.params.spotId
    const spot = state.entities.spots[spotId]
    const booking = state.entities.bookings
    const user_id = state.session.id
    // debugger
    // const host = state.entities.host[spot.host_id]
    
    return {
        spot: spot,
        user_id: user_id,
        host: state.entities.host,
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

export default connect(mapSTP, mapDTP)(SpotShow)