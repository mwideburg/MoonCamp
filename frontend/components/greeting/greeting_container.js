import { connect } from 'react-redux';
import { openModal, switchLogin, switchSignup} from '../../actions/modal_actions'
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
    openModal: modalType => dispatch(openModal(modalType)) ,
    switchLogin: modalType => dispatch(switchLogin(modalType)),
    switchSignup: modalType => dispatch(switchSignup(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);