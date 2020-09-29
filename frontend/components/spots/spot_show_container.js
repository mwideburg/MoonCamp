import { connect } from 'react-redux';

import { getSpot, getHost } from '../../actions/spot_actions'
// import getSpots from '../../actions/spot_actions'
import SpotShow from "./spot_show";

const mapSTP = (state, ownProps) => {
    // debugger
    const spotId = ownProps.match.params.spotId
    const spot = state.entities.spots[spotId]
    // debugger
    // const host = state.entities.host[spot.host_id]
    
    return {
        spot: spot,
        host: state.entities.host
       
    }
}
const mapDTP = dispatch => {
    // debugger
    return {
        getSpot: (spotId) => dispatch(getSpot(spotId)),
        getHost: (hostId) => dispatch(getHost(hostId))
    }
}

export default connect(mapSTP, mapDTP)(SpotShow)