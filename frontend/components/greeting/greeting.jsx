import React from 'react';
import { Link } from 'react-router-dom';
import { showModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'

const Greeting = ({ currentUser, logout }) => {
       
        const loginOrSignup = () => {
        // debugger
        
        
        return (
            <nav className="links">
                {/* <button onClick={showLoginModal} className="user-button logout">MODAL</button> */}
                <Link to="/login" className="user-button" >Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link>
            </nav>
        )
    }
    const hello = () => {
        // debugger
        return (<nav className="links">
            {/* <p>Hello {currentUser.firstname}</p> */}
            <button onClick={logout} className="user-button logout">Log Out</button>
        </nav>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;