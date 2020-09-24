import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal(modalType, closeModal){
    if(!modalType.modalType){
        return null
    }
    let component
    let background
    let noClick = ""
    let modalChild = "modal-child"
    let loginButton = ""
    // debugger
    switch (modalType.modalType.modalType) {
        case 'login':
            component = <LoginFormContainer/>
            background = "modal-background"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            break;
        case 'signup':
            component = <SignupFormContainer/>
            background = "modal-background"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            
            break;
        case 'switch_login':
            // debugger
            // noClick = ""
            // // component = <LoginFormContainer />
            // background = "no-background"
            modalChild = "login-splash-cointainer"
            // loginButton = <Link to="/login" className="logout-button-fix hover-btn"> LOG IN</Link>
            break;
        case 'switch_signup':
            // debugger
            noClick = ""
            component = <SignupFormContainer />
            background = "switch-background"
            // noClick = modalType.closeModal
            modalChild = "modal-child"
            // button = "show-logout-button"
            break;
        default:
            background = "modal-background"
            return null;
    }
    return (
        <div className={background} onClick={noClick}>
            
            <div className={modalChild} onClick={e => e.stopPropagation()}>
                <div className="login-form-container ">
                {component}

                </div>
            </div>
        </div>
    )
}


    


const mapStateToProps = state => {
    return {
        modalType: state.ui.modalType
    };
};
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);