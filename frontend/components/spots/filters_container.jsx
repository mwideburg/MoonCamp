import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots, removeFilters, updateSpotsFiltersNoBack } from '../../actions/filter_actions'
import { getAmenities } from '../../actions/amenities_actions';
import FiltersContainer from "./filters";


const mapSTP = (state) => {
    
    return {
        amenities: Object.values(state.entities.amenities),
        spots: state.entities.spots,
        filter: state.ui.filters
    }
}
const mapDTP = dispatch => {
    // 
    return {
        updateSpotsFiltersNoBack: (filter, value) => dispatch(updateSpotsFiltersNoBack(filter, value)),
        getAmenities: () => dispatch(getAmenities()),
        removeFilters: () => dispatch(removeFilters),
        updateSpots: (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter, value) => dispatch(updateSpotsFilters( filter, value ))
    }
}

export default connect(mapSTP, mapDTP)(FiltersContainer)