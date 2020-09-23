import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import DemoUser from './demo_user_login';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'LOGIN',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoUser);
