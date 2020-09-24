import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const Greeting = ({ currentUser, logout, openModal }) => {
       
        const loginOrSignup = () => {
        debugger
        return (
            <nav className="links">
                {/* <button onClick={demoUser({email: "michael", password:"michael"})} className="user-button logout">MODAL</button> */}
                <button onClick={() => openModal('signup')} className="user-button">signup</button>
           
                <button onClick={() => openModal('login')} className="user-button">login</button>
                {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                <Link to="/" className="user-button"> DEMO</Link>
            </nav>
        )
    }
    const hello = () => {
        // debugger
        return (<nav className="links logged-in-dropdown">
            <img className="moon" src="https://pngimg.com/uploads/moon/moon_PNG20.png" alt=""/>
            <div className="dropdown-user">
           
                <ul>
                    <li>
                        <a href="">PROFILE</a>
                    </li>
                    <li>
                        <a href="">{currentUser.firstname}</a>
                    </li>
                    <li>
                        <a href="">REVIEWS</a>
                    </li>
                    <li>
                        <a href="">ACCOUNT</a>
                    </li>
                    <li>
                        <a href="">HEY</a>
                    </li>
                    <li >
                        <a href="/" onClick={logout}>Log Out</a>
                    </li>
                </ul>
            </div>
            
        </nav>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;