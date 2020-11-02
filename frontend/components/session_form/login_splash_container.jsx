import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from './login_fix_container'

class LoginSplash extends React.Component{
    render(){
        return(
            <>
            <div className="splash-container">
                <div className="login-splash">
                    <div>
                        {/* <center>
                            <h1>WELCOME BACK</h1>
                            <h3>
                                Space... the final frontier... time to explore
                            </h3>
                            <br />


                        </center> */}
                        
                    </div>
                    <div className="log-splash-form">
                        
                            
                        <LoginContainer />
                    </div>
                </div>

                <hr/>
                <div className="host-review-container">

                    <div className="offset-frame picard">

                        <div className="worf">
                            <img className="worf picard-img" src="https://img1.grunge.com/img/gallery/the-worst-things-captain-picard-has-ever-done/intro-1570819077.jpg" alt="" />
                        </div>

                        <div className="worf-container">
                            <div className="detail-container " id="login-picard">
                                
                                    <h3>“Things are only impossible until they are not.”</h3>
                                    <br/>
                                <p>
                                    “I once was on a moon, it was a sweet little moon, with a bunch of crators, that's where I got the idea, why can't we just camp
                                    out on these things, `Ensign Crusher, grab my bags and set up the tent... were moon camping tonight.`”
                                    </p>
                                    <br />

                                
                                
                                <a href="http://www.michaelwideburg.com" id="links"> - Captian Picard</a>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            <footer >

                    <div className="footer-container">


                    made by michael wideburg with a lot of love and guidance from app academy
                    <button className="help-button"> ? Help </button>

                    </div>


                </footer>
                </>
        )
    }
}

export default LoginSplash