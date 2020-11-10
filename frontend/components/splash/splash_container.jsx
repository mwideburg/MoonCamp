import { connect } from 'react-redux';
import { getSpots, getSpot } from '../../actions/spot_actions'
import Splash from "./splash";
import { getAmenities } from '../../actions/amenities_actions'
const mapStateToProps = (state) => {
    // debugger
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
    // debugger
    return {
        getAmenities: () => dispatch(getAmenities()),
        getSpots: () => dispatch(getSpots())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash)