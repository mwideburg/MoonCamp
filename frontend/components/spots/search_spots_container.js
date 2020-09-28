import { connect } from 'react-redux';

import SearchSpots from "./search_spots";

const mapSTP = (state) => {
    // debugger
    return{
        spots: state.entities.spots
    }
}
const mapDTP = dispatch => {
    return{
        // updateBounds : (bounds) => dispatch(updateBounds(bounds))
    }
}

export default connect(mapSTP, mapDTP)(SearchSpots)