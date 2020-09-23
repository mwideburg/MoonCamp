import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'SIGNUP',
        // navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))} className="other-form">
                LOG IN
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
