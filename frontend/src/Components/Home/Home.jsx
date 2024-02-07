import React from 'react';
import {useNavigate} from "react-router-dom";
import './Home.css'

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
            <div className='home-container'>
                <div className='home-header'>
                    <div className='home-text'>Product Management</div>
                    <div className="home-underline"></div>
                </div>
                <div className="home-submit-container">
                    <div className="home-submit" onClick={navigateLogin}>Login</div>
                    <div className="home-submit" onClick={navigateSignUp}>Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default Home;