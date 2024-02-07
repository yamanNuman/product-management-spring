import React from 'react';
import {jwtDecode} from "jwt-decode";

const Welcome = () => {
    const userToken = localStorage.getItem('accessToken');
    const data = jwtDecode(userToken);
    const firstname = data.sub;
    return (
        <div>
            <h1>Welcome {firstname}</h1>
        </div>
    );
};

export default Welcome;