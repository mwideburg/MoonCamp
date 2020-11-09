import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots, removeFilter } from '../../actions/filter_actions'
// import getSpots from '../../actions/spot_actions'
import SearchSpots from "./search_spots";

const mapSTP = (state) => {
    // debugger
    return{
        
        spots: state.entities.spots
        
    }
}
const mapDTP = dispatch => {
    // debugger
    return{
        
        
        // getSpots: () => dispatch(getSpots()),
        // updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        updateSpots : (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter, value) => dispatch(updateSpotsFilters(filter, value)),
        removeFilter: (filter, value) => dispatch(removeFilter(filter, value))
    }
}

export default connect(mapSTP, mapDTP)(SearchSpots)