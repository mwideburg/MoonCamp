import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal(modalType, closeModal){
    if(!modalType){
        return null
    }
    let component
    // debugger
    switch (modalType.modalType.modalType) {
        case 'login':
            component = <LoginFormContainer/>
            break;
        case 'signup':
            component = <SignupFormContainer/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={modalType.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
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