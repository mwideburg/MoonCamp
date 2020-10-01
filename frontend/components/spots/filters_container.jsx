import { connect } from 'react-redux';
import { updateSpotsFilters, updateSpots } from '../../actions/filter_actions'
// import getSpots from '../../actions/spot_actions'
import FiltersContainer from "./filters";


const mapSTP = (state) => {
    // debugger
    return {

        spots: state.entities.spots
    }
}
const mapDTP = dispatch => {
    // debugger
    return {


        // getSpots: () => dispatch(getSpots()),
        // updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        updateSpots: (bounds) => dispatch(updateSpots(bounds)),
        updateSpotsFilters: (filter) => dispatch(updateSpotsFilters( filter ))
    }
}

export default connect(mapSTP, mapDTP)(FiltersContainer)