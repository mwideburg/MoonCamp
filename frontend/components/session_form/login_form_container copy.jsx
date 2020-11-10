import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';

import { openModal, closeModal, switchLogin, switchSignup } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    // 
    return {
        errors: errors.session,
        formType: 'Log in',
        // navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    // 
    return {
        processForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors()),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('signup'))} className="other-form">
        //         Sign Up
        //     </button>
        // ),
        
        otherForm: (
            <Link to="/signup" className="other-form">
            <button onClick={() => dispatch(closeModal())} className="other-form">
                Sign Up
            </button>
            </Link>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
