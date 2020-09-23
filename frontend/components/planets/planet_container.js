

import { connect } from 'react-redux';

import Planets from './planets';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return () => dispatch();
};

export default connect(null, null)(Planets);
