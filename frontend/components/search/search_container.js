

import { connect } from 'react-redux';

import Search from './search';

const mapStateToProps = state => {
    return{
        spots: state.entities.spots
    }
};

const mapDispatchToProps = dispatch => {
    return {
    
    }
};

export default connect(null, null)(Search);
