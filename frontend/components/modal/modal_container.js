import { connect } from 'react-redux';
import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

import {LOGIN_MODAL, SIGNUP_MODAL} from '../../actions/modal_actions'

const ModalContainer = props =>{
    const ModalType = props.modalType
    return <ModalType />
}

const mapStateToProps = state => ({
    modalType: state.modal.modalType
})


export default connect(mapStateToProps)(ModalContainer)
