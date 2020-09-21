import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    // debugger
    return {
        currentUser: users[session.id]
    };
};

// const mapStateToProps = (state) => {
//     console.log(state);
//     return state;

// }

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);