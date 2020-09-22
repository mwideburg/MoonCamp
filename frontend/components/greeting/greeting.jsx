import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const loginOrSignup = () => {
        // debugger
        return (
            <nav className="links">
                <Link to="/login" className="user-button" >Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link>
            </nav>
        )
    }
    const hello = () => {
        // debugger
        return (<nav>
            {/* <p>Hello {currentUser.firstname}</p> */}
            <button onClick={logout} className="user-button logout">Log Out</button>
        </nav>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;