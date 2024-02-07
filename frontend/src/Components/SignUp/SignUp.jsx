import React from 'react';
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className='signup-container'>
                <div className='signup-header'>
                    <div className='signup-text'>Sign Up</div>
                    <div className="signup-underline"></div>
                </div>
                <div className='signup-inputs'>
                    <div className='signup-input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="First name"/>
                    </div>
                    <div className='signup-input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Last name"/>
                    </div>
                    <div className='signup-input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className='signup-input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="signupsubmit-container">
                    <div className="signup-submit">Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;