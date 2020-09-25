

import { connect } from 'react-redux';

import Example from './example';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return () => dispatch();
};

export default connect(null, null)(Example);
