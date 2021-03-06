import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'// ES6
import LoginFormContainer from '../session_form/login_fix_container';
import SignupFormContainer from '../session_form/signup_form_container';
import GalleryContainer from '../spots/gallery_show_container';
import SignupSplashContainer from '../session_form/signup_page_container';
import HostFormContainer from '../hosts/host_signup';

function Modal(modalType, closeModal){
    // if(!modalType.modalType){
    //     return null
    // }

    
    let component
    let background = "modal"
    let noClick = modalType.closeModal
    let modalChild = "modal-child"
    let loginButton = ""
   
    switch (modalType.modalType.modalType) {
        case 'login':
            component = <LoginFormContainer/>
            background = "can-he-do-it"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            break;
        case 'signup':
            component = <SignupFormContainer/>
            background = "can-he-do-it"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            break;
        case 'switch_login':
            
            noClick = ""
            component = <LoginFormContainer />
            // background = "can-he-do-it"
            modalChild = "login-splash-cointainer"
            loginButton = <Link to="/login" className="logout-button-fix hover-btn"> LOG IN</Link>
            break;
        case 'switch_signup':
            // 
            noClick = ""
            component = <SignupFormContainer />
            
            background = "switch-background"

            noClick = modalType.closeModal
            // modalChild = "modal-child"
            // button = "show-logout-button"
            break;
        case 'gallery':
            // 
            background = "can-he-do-it blackish-modal"
            noClick = modalType.closeModal
            modalChild = "gallery-modal-child"
            
            component = <GalleryContainer photo={modalType.modalType.photos}/>
            break;
        case 'host':
            // 
            
            component = <HostFormContainer closeModal={modalType.closeModal}/>
            background = "can-he-do-it"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            break;
        default:
            background = "modal"
            return null;
    }
    return (
        <div onClick={noClick} >

        
        <CSSTransitionGroup
            transitionName="modal"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
        <div className={background}>
        </div>
        </CSSTransitionGroup>

        <CSSTransitionGroup
            transitionName="modal-child"
            transitionAppear={true}
            transitionAppearTimeout={100}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
        
        <div className={modalChild} onClick={e => e.stopPropagation()}>
            
            {component}

            
        </div>
        </CSSTransitionGroup>
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