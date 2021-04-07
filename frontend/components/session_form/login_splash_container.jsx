import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginContainer from './login_fix_container'

function LoginSplash(){
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const submit = (e) => {
            e.preventDefault()
            
        }


        
        return(
            <>
            <div className="splash-container">
                <div className="login-splash">

                    <div className="login-form">
                        <label for="email">Email: </label>
                        <input 
                        type='text'
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        ></input>
                        <br/>
                        <label for="password">Password: </label>

                        <input 
                                type='password'
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                        ></input>

                    </div>
                </div>


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


export default LoginSplash