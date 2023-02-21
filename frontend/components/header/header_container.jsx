import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'
// import { login } from '../../actions/session_actions'

const Greeting = ({ currentUser, logout, demo, openModal }) => {

    const loginOrSignup = () => {
        // 
        return (
            <header className="navbar">


                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
                <nav className="links">
                    <button onClick={() => openModal('login')} className="user-button">Log in</button>
                    <button onClick={() => openModal('signup')} className="user-button">Sign up</button>
                    <button onClick={demo} className="user-button demo-btn">DEMO</button>
                </nav>

            </header>
        )
    }
    const hello = () => {
        // 
        console.log("CURRENT USER", curren)
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
                                    <Link to={path}>Account</Link>
                                    
                                </li>
                                <li>
                                    <a onClick={() => openModal('host')}>Become A Host</a>
                                </li>
                                <li>
                                    <a href="https://mwideburg.github.io/" target="_blank">Help FAQ</a>
                                </li>
                                <li>
                                    <a href="https://github.com/mwideburg/MoonCamp" target="_blank">About</a>
                                </li>
                                <li >
                                    <Link to="/" onClick={logout}>Log Out</Link>
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