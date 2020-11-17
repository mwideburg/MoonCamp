import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal_actions'


const navContainer = ({ currentUser, demo, logout, openModal, ownProps }) => {
        let navbar
        let path
        let path2
        if (currentUser != undefined) {

        path = `/users/${currentUser.id}/trips`
        path2 = `/users/${currentUser.id}/saves`
        }
        const handleSubmit = (e) => {
            debugger
            return <Redirect to="/spots"/>
        }
        if(!currentUser){
            navbar = (
            <nav className="links">
                <button onClick={() => openModal('login')} className="user-button">Log in</button>
                <button onClick={() => openModal('signup')} className="user-button">Sign up</button>

                
                {/* <Link to="/login" className="user-button" onClick={() =>openModal}>Log In</Link>
                <Link to="/signup" className="user-button">Sign Up</Link> */}
                {/* <Link to="/demo" className="user-button"> DEMO</Link> */}
                <button onClick={demo} className="user-button demo-btn">DEMO</button>
            </nav>
            )
        }else{
            
            navbar = (
                <nav className="links">
                    <Link to={path} ><button className="user-button">Trips</button></Link>
                    <Link to={path2} ><button className="user-button">Saves</button></Link>

                    
                    
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
                                    <a href="https://mwideburg.github.io/">Help FAQ</a>
                                </li>
                                <li>
                                    <a href="https://github.com/mwideburg/MoonCamp">About</a>
                                </li>
                                <li >
                                    <a href="" onClick={logout}>Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            )
        }
  
      
        
        return (
            <>
            <header className="navbar unfixed">

                <Link to="/" className="nav-bar-logo">
                    <h2 >Moon Camp</h2>
                </Link>
            <div className="search-nav-bar unfixed">
                        <form >
                        
                        <i className="fa fa-search"></i>
                        <input type="search" className="search-nav-form" placeholder="Moon, jups..."/>
                        <Link to='/spots'><input type="submit" className="hide" /></Link>
                    </form>
            </div>
            {navbar}

            </header>
            </>
        )
    

}

import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';


const mapStateToProps = ({ session, entities: { users } }) => {
    // 
    return {
        currentUser: users[session.id],
        
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