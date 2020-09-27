import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const navContainer = ({ currentUser, demo, logout, openModal }) => {
        let navbar
        if(!currentUser){
            navbar = (
            <nav className="links">

                <button onClick={() => openModal('signup')} className="user-button">Sign up</button>

                <button onClick={() => openModal('login')} className="user-button">Log in</button>
                {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                {/* <Link to="/demo" className="user-button"> DEMO</Link> */}
                <button onClick={demo} className="user-button demo-btn">DEMO</button>
            </nav>
            )
        }else{
            navbar = (
                <div className="header-links">
                <nav className="links">
                    <button className="user-button">Trips</button>

                    <button className="user-button">Saves</button>
                    <button className="user-button">Messages</button>
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
                                <a href="/" onClick={logout}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                    </div>

                </nav>
                </div>
            )
        }
    

        return (
            <>
            <header className="navbar unfixed">
                <div className="header-wrapper">
                    <div className="title-search-container">
                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
            <div className="search-nav-bar unfixed">
                <form action="">
                        
                        <i className="fa fa-search"></i>
                        <input type="search" className="search-nav-form" placeholder="Moon, jups..."/>
                </form>
            </div>
            </div>
            {navbar}
            </div>

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
    demo: () => dispatch(login({ email: "michael@mooncamp.com", password: "michael" })),
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)),
    switchLogin: modalType => dispatch(switchLogin(modalType)),
    switchSignup: modalType => dispatch(switchSignup(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(navContainer);


// <nav className="links">
//     <button onClick={demoUser({email: "michael", password:"michael"})} className="user-button logout">MODAL</button>
//     <button onClick={() => openModal('signup')} className="user-button">Sign Up</button>

//     <button onClick={() => openModal('login')} className="user-button">Log in</button>
//     {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
//                 <Link to="/signup" className="user-button">Sign Up</Link> */}
//     <Link to="/">
//         <button onClick={demo} className="user-button demo-btn">DEMO</button>
//     </Link>
// </nav>