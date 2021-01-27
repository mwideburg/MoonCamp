import { connect } from 'react-redux';
import Activities from './activities';

const mapStateToProps = state => {
   
    return {
        spots: state.entities.spots
    }
};


export default connect(mapStateToProps, null)(Activities);
