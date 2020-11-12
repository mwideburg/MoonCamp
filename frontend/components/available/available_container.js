

import { connect } from 'react-redux';

import Available from './available';

const mapStateToProps = state => ({
    spots: state.entities.spots,


});

const mapDispatchToProps = dispatch => {
    return () => dispatch();
};

export default connect(mapStateToProps, null)(Available);
