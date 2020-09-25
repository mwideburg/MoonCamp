import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal, switchLogin, switchSignup } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ui, errors}) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'Sign Up',
        modalType: ui.modalType.modalType
        // navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors()),
        otherForm: (
            <>
                <Link to="/login">
            <button onClick={() => dispatch(closeModal())} className="other-form">
                Log in
            </button>
                </Link>
            </>
        ),
        otherButton: (
            <>
                <Link to="/login">
                    <button onClick={() => dispatch(closeModal())} className="other-form logout-button-fix hover-btn">
                        Log in
            </button>
                </Link>
            </>
        ),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))} className="other-form">
        //         LOG IN
        //     </button>
        // ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
