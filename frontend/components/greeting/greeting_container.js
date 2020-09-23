import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions'
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
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);