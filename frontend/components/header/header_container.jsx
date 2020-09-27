import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'
// import { login } from '../../actions/session_actions'

const Greeting = ({ currentUser, logout, demo, openModal }) => {

    const loginOrSignup = () => {
        // debugger
        return (
            <header className="navbar">


                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
                <nav className="links">

                    <button onClick={() => openModal('signup')} className="user-button">Sign up</button>

                    <button onClick={() => openModal('login')} className="user-button">Log in</button>
                    {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                    {/* <Link to="/demo" className="user-button"> DEMO</Link> */}
                    <button onClick={demo} className="user-button demo-btn">DEMO</button>
                </nav>

            </header>
        )
    }
    const hello = () => {
        // debugger

        return (
            <header className="navbar">


                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
                <nav className="links">
                    <div className="logged-in-dropdown">

                    <img className="moon" src="https://pngimg.com/uploads/moon/moon_PNG20.png" alt="" />
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
                                <a href="" onClick={logout}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

            </header>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;