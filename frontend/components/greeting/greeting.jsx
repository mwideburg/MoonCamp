import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const loginOrSignup = () => {
        // debugger
        return (
            <nav>
                <Link to="/login">Log In</Link>
                <br />
                <Link to="/signup">Sign Up</Link>

            </nav>
        )
    }
    const hello = () => {
        debugger
        return (<nav>
            <p>Hello {currentUser.firstname}</p>
            <button onClick={logout}>Log Out</button>
        </nav>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;