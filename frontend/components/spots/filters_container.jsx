import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots, removeFilters } from '../../actions/filter_actions'
import { getAmenities } from '../../actions/amenities_actions';
// import getSpots from '../../actions/spot_actions'
import FiltersContainer from "./filters";


const mapSTP = (state) => {
    
    return {
        amenities: Object.values(state.entities.amenities),
        spots: state.entities.spots
    }
}
const mapDTP = dispatch => {
    // debugger
    return {


        // getSpots: () => dispatch(getSpots()),
        // updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        getAmenities: () => dispatch(getAmenities()),
        removeFilters: () => dispatch(removeFilters()),
        updateSpots: (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter, value) => dispatch(updateSpotsFilters( filter, value ))
    }
}

export default connect(mapSTP, mapDTP)(FiltersContainer)