

import { connect } from 'react-redux';
import{updateOneFilter} from '../../actions/filter_actions'
import Search from './search';

const mapStateToProps = state => {
    return{
        spots: state.entities.spots
    }
};

const mapDispatchToProps = dispatch => {
    return {
    updateOneFilter: (filter, value) => dispatch(updateOneFilter(filter, value))
    }
};

export default connect(null, mapDispatchToProps)(Search);
