import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const navContainer = ({ currentUser, logout, openModal }) => {

    

        return (
            <>
            <div className="search-nav-bar">
                <form action="">
                        
                        <i className="fa fa-search"></i>
                        <input type="search" className="search-nav-form" placeholder="Moon, jups..."/>
                </form>
            </div>
            <nav className="links">
                {/* <button onClick={demoUser({email: "michael", password:"michael"})} className="user-button logout">MODAL</button> */}
                <button onClick={() => openModal('signup')} className="user-button">signup</button>

                <button onClick={() => openModal('login')} className="user-button">login</button>
                {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                <Link to="/demo" className="user-button"> DEMO</Link>
            </nav>
            </>
        )
    

}

import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';


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
    openModal: modalType => dispatch(openModal(modalType)),
    switchLogin: modalType => dispatch(switchLogin(modalType)),
    switchSignup: modalType => dispatch(switchSignup(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(navContainer);
