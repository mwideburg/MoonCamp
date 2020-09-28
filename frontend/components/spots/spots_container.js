import { connect } from 'react-redux';
import { getSpots, getSpot } from '../../actions/spot_actions'
import SpotIndex from "./spots_index";

const mapStateToProps = (state) => {
    // debugger
    return {
        spots: state.entities.spots
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
        getSpots: () => dispatch(getSpots())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex)