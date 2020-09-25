import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from './login_form_container'

class LoginSplash extends React.Component{
    render(){
        return(
            <div className="splash-container">
                <div className="modal-container login-splash">
                    <div>
                        <center>
                            <h1>WELCOME BACK</h1>
                            <h3>
                                Space... the final frontier... time to explore
                            </h3>
                            <br />


                        </center>
                        
                    </div>
                    <div className="log-splash-form">
                        
                            
                        <LoginContainer/>
                    </div>
                </div>

                <hr/>
                <div className="host-review-container">

                    <div className="offset-frame picard">

                        <div className="worf">
                            <img className="worf picard-img" src="https://img1.grunge.com/img/gallery/the-worst-things-captain-picard-has-ever-done/intro-1570819077.jpg" alt="" />
                        </div>

                        <div className="worf-container">
                            <div className="detail-container offset">
                                <h3>“Things are only impossible until they are not.”</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer 
                                <p></p>
                                <br />
                                <a href="http://www.michaelwideburg.com" id="links"> - Michael Wideburg</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSplash