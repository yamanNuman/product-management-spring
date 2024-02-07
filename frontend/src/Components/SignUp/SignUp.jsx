import React, {useState} from 'react';
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import './SignUp.css'
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password
        }
        if(payload.firstname != null && payload.lastname != null && payload.email != null && payload.password != null) {
            sweetAlert();
        } else {
            sweetAlertError();
        }
        try {
            await axios.post('http://localhost:8080/api/v1/auth/register',payload)

        } catch (error) {
            return error;
        }
    }
    const sweetAlert = () => {
        Swal.fire({
            position : "center",
            icon : "success",
            title : "Successfully Registered",
            showConfirmButton : true,
            timer : 1500
        }).then(function() {
            window.location.href = "/";
        });
    };
    const sweetAlertError = () => {
        Swal.fire({
            position : "center",
            icon : "error",
            title : "Please fill in all fields",
            showConfirmButton : true,
            time : 1500
        }).then(function(){
            window.location.href = "/signup"
        })
    }

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
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="First name"/>
                    </div>
                    <div className='signup-input'>
                        <img src={user_icon} alt="" />
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Last name"/>
                    </div>
                    <div className='signup-input'>
                        <img src={email_icon} alt="" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>
                    <div className='signup-input'>
                        <img src={password_icon} alt="" />
                        <input value={password} onChange={(e => setPassword(e.target.value))} type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="signupsubmit-container">
                    <div onClick={(e) => {handleSubmit(e)}} className="signup-submit">Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;