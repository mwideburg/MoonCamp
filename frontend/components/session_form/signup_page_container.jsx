import React from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from './signup_form_container'


class SignupSplashContainer extends React.Component {

    
    render() {
        return (
            <div>

            
            <div className="signup-page-container">
                <h1 className="i-fix-you"> SPACE... 
                <br/>
                it's empty without you</h1>
                <div className="signup-child">
                        <div className="login-form-container ">
                    <Link to="/login">
                        <button className="other-form logout-button-fix">
                            LOG IN
                    </button>
                    </Link>
                            <SignUpContainer  noButton={true}/>

                        </div>
                

                </div>
            </div>

            </div>
        )
    }
}

export default SignupSplashContainer