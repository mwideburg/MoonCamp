import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const navContainer = ({ currentUser, demo, logout, openModal }) => {

    

        return (
            <>
            <header className="navbar unfixed">

                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
            <div className="search-nav-bar unfixed">
                <form action="">
                        
                        <i className="fa fa-search"></i>
                        <input type="search" className="search-nav-form" placeholder="Moon, jups..."/>
                </form>
            </div>
            <nav className="links">
                {/* <button onClick={demoUser({email: "michael", password:"michael"})} className="user-button logout">MODAL</button> */}
                <button onClick={() => openModal('signup')} className="user-button">Sign Up</button>

                <button onClick={() => openModal('login')} className="user-button">Log in</button>
                {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                <Link to="/">
                    <button onClick={demo} className="user-button demo-btn">DEMO</button>
                    </Link>
            </nav>

            </header>
            </>
        )
    

}

import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';


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
    demo: () => dispatch(login({ email: "michael", password: "michael" })),
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)),
    switchLogin: modalType => dispatch(switchLogin(modalType)),
    switchSignup: modalType => dispatch(switchSignup(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(navContainer);
