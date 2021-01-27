import { connect } from 'react-redux';
import { openModal, switchLogin, switchSignup} from '../../actions/modal_actions'
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    // 
    return {
        currentUser: users[session.id]
    };
};
const mapDispatchToProps = dispatch => ({
    demo: () => dispatch(login({ email: "michael@mooncamp.com", password: "michael" })),
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)) ,
    switchLogin: modalType => dispatch(switchLogin(modalType)),
    switchSignup: modalType => dispatch(switchSignup(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);