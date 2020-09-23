import React from 'react';
import { Link } from 'react-router-dom';
import { showModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const Greeting = ({ currentUser, logout }) => {
       
        const loginOrSignup = () => {
        // debugger
        
        const showModalLogin = () =>{
            showModal('LOGIN_USER')
        }
        return (
            <nav className="links">
                {/* <button onClick={showLoginModal} className="user-button logout">MODAL</button> */}
                <Link to="/login" className="user-button" onClick={showModalLogin}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link>
            </nav>
        )
    }
    const hello = () => {
        // debugger
        return (<nav className="links logged-in-dropdown">
            {/* <p>Hello {currentUser.firstname}</p> */}
            <img className="moon" src="https://pngimg.com/uploads/moon/moon_PNG20.png" alt=""/>
            <div className="dropdown-user">
                <ul>
                    <li>
                        <a href="">PROFILE</a>
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
                    <li>
                        <button onClick={logout} className="user-button logout">Log Out</button>
                    </li>
                </ul>
            </div>
            
        </nav>
        )
    }

    return currentUser ? hello() : loginOrSignup();
}


export default Greeting;