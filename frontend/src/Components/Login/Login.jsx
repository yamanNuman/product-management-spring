import React, {useState} from 'react';
import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email : email,
            password : password
        }

        try {
           const res = await axios.post('http://localhost:8080/api/v1/auth/authenticate',payload);
           localStorage.setItem('accessToken',res.data.accessToken)
            sweetAlertSuccess();

        } catch (error) {
            sweetAlertError();
            return error;

        }
    }
    function sweetAlertSuccess() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully logged in",
            showConfirmButton: true,
            timer: 1500
        }).then(function() {
            window.location.href = '/welcome'
        })
    }
    function sweetAlertError(){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Wrong username or password",
            showConfirmButton: true,
            timer: 5000
        }).then(function() {
            window.location.href = '/login'
        })
    }

    return (
        <div className='login-container'>
            <div className='login-header'>
                <div className='login-text'>Login</div>
                <div className="login-underline"></div>
            </div>
                <div className='login-inputs'>

                    <div className='login-input'>
                        <img src={email_icon} alt="" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>
                    <div className='login-input'>
                        <img src={password_icon} alt="" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="login-submit-container">
                    <div onClick={(e) => handleSubmit(e)} className="login-submit">Login</div>
                </div>
        </div>
    );
};

export default Login;