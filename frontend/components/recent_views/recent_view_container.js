

import { connect } from 'react-redux';

import RecentView from './recent_view';

const mapStateToProps = ({ session, entities: { users } }) => {
    // 
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return () => dispatch();
};

export default connect(mapStateToProps, null)(RecentView);
