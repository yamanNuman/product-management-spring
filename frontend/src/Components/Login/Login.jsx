import React from 'react';
import './Login.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Login = () => {

    return (
        <div className='login-container'>
            <div className='login-header'>
                <div className='login-text'>Login</div>
                <div className="login-underline"></div>
            </div>
                <div className='login-inputs'>

                    <div className='login-input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className='login-input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="login-submit-container">
                    <div className="login-submit">Login</div>
                </div>
        </div>
    );
};

export default Login;