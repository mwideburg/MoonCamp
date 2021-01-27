import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots, removeFilter, updateSpotsFiltersNoBack } from '../../actions/filter_actions'
import SearchSpots from "./search_spots";

const mapSTP = (state) => {
    
    return{
        
        spots: state.entities.spots,
        amenities: state.entities.amenities
        
    }
}
const mapDTP = dispatch => {
    // 
    return{
        updateSpots : (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter, value) => dispatch(updateSpotsFilters(filter, value)),
        updateSpotsFiltersNoBack: (filter, value) => dispatch(updateSpotsFiltersNoBack(filter, value)),
        removeFilter: (filter, value) => dispatch(removeFilter(filter, value))
    }
}

export default connect(mapSTP, mapDTP)(SearchSpots)