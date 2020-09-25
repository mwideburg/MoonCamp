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
                <div>
                    <div className="resume">
                        
                        <div className="space-image ">

                        </div>
                        

                    </div>

                </div>
            </div>
        )
    }
}

export default LoginSplash