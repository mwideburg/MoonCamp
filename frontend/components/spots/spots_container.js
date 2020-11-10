import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { getSpots, getSpot, removeFilters } from '../../actions/spot_actions'
import SpotIndex from "./spots_index";
import { getAmenities } from '../../actions/amenities_actions'
const mapStateToProps = (state) => {
    // 
    return {
        spots: state.entities.spots,
        amenities: state.entities.amenities
    }
}
// const mapDispatchToProps = dispatch => {
    
//     return ({
//         getSpots: () => dispatch(getSpots()),
       
//     })
// }



const mapDispatchToProps = dispatch => {
    // 
    return {
        getAmenities: () => dispatch(getAmenities()),
        getSpots: () => dispatch(getSpots())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SpotIndex))