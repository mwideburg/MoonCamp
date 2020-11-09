import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots } from '../../actions/filter_actions'
import { getAmenities } from '../../actions/amenities_actions'
// import getSpots from '../../actions/spot_actions'
import SearchSpotsMars from "./search_spots_mars";

const mapSTP = (state) => {
    // debugger
    return{
        
        spots: state.entities.spots
        
    }
}
const mapDTP = dispatch => {
    // debugger
    return{
        
        getAmenities: () => dispatch(getAmenities()),
        // getSpots: () => dispatch(getSpots()),
        // updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        updateSpots : (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter, value) => dispatch(updateSpotsFilters(filter, value))
    }
}

export default connect(mapSTP, mapDTP)(SearchSpotsMars)