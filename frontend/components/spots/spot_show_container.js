import { connect } from 'react-redux';

import { getSpot, getHost, requestBooking, saveSpot, removeSave } from '../../actions/spot_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
// import getSpots from '../../actions/spot_actions'
import SpotShow from "./spot_show";

const mapSTP = (state, ownProps) => {
    // 
    const spotId = ownProps.match.params.spotId
    const spot = state.entities.spots[spotId]
    const booking = state.entities.bookings
    const user_id = state.session.id
    const user = state.entities.users[user_id]
    // 
    // const host = state.entities.host[spot.host_id]
    
    return {
        spot: spot,
        user_id: user_id,
        host: state.entities.host,
        user: user,
        booking: booking
       
    }
}
const mapDTP = dispatch => {
    // 
    return {
        getSpot: (spotId) => dispatch(getSpot(spotId)),
        getHost: (hostId) => dispatch(getHost(hostId)),
        openModal: (ModalType, photo) => dispatch(openModal(ModalType, photo)),
        requestBooking: (booking) => dispatch(requestBooking(booking)),
        saveSpot: (save) => dispatch(saveSpot(save)),
        removeSave: (save) => dispatch(removeSave(save))
        
    }
}

export default connect(mapSTP, mapDTP)(SpotShow)