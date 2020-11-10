

import { connect } from 'react-redux';

import Activities from './activities';

const mapStateToProps = state => {
   
    return {
        spots: state.entities.spots
    }
};

const mapDispatchToProps = dispatch => {
    return () => dispatch();
};

export default connect(mapStateToProps, null)(Activities);
