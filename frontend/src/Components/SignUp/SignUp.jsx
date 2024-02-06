import React from 'react';
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const SignUp = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="First name"/>
                    </div>
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Last name"/>
                    </div>
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;