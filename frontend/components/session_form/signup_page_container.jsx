import React from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from './signup_form_container'


class SignupSplashContainer extends React.Component {

    
    render() {
        return (
            <div className="min-height">

            
            <div className="signup-page-container">
                    <h1 className="i-fix-you"> SPACE... </h1>
                <br/>
                    <h1 className="i-fix-you-later">it's empty without you</h1>
                <div className="signup-child" >
                        <div className="login-form-container " >
                    <Link to="/login">
                        <button className="other-form logout-button-fix">
                            Log in
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