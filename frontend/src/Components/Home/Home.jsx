import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();
    const navigateLogin = ()=> {
        navigate('/login');
    }
    const navigateSignUp = () => {
        navigate('/signup')
    }
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Product Management</div>
                    <div className="underline"></div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={navigateLogin}>Login</div>
                    <div className="submit" onClick={navigateSignUp}>Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default Home;