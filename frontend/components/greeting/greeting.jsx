import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'
// import { login } from '../../actions/session_actions'

const Greeting = ({ currentUser, logout, demo , openModal }) => {
        
        let path
        if(currentUser != undefined){

            path = `users/${currentUser.id}`
        }
        const loginOrSignup = () => {
        // debugger
        return (
            <header className="navbar">


            <Link to="/" className="nav-bar-logo">
            <h2 >Moon Camp</h2>
            </Link>
            <nav className="links">
                <button onClick={() => openModal('login')} className="user-button">Log in</button>
                <button onClick={() => openModal('signup')} className="user-button">Sign up</button>
                
                
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
        <nav className="links ">
            <Link to={path}><button className="user-button">Trips</button></Link>

            <button className="user-button">Saves</button>
            {/* <button className="user-button">Messages</button> */}


            <div className="logged-in-dropdown">

            <img className="moon" src="https://pngimg.com/uploads/moon/moon_PNG20.png" alt=""/>
            
                        <div className="dropdown-user">

                            <ul>
                                <li>
                                    <a href="">Account</a>
                                </li>
                                <li>
                                    <a href="">Earn MoonCash</a>
                                </li>
                                <li>
                                    <a href="">Become A Host</a>
                                </li>
                                <li>
                                    <a href="">Help FAQ</a>
                                </li>
                                <li>
                                    <a href="">About</a>
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