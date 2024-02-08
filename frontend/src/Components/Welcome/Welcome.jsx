import React, {useState} from 'react';
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import ColorSchemesExample from "../Navbar/Navbar";

const Welcome = () => {

    const [products,setProducts] = useState(null);
    async function fetchData() {
        const result = await axios.get('http://localhost:8080/api/v1/products');
        setProducts(result.data);
    }
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${userToken}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )
    const userToken = localStorage.getItem('accessToken');
    const data = jwtDecode(userToken);
    const firstname = data.sub;
    return (
        <div>
            <ColorSchemesExample></ColorSchemesExample>
            <h1>Welcome {firstname}</h1>
            <div><button onClick={fetchData}>Call Spring</button></div>
            <div>{JSON.stringify(products)}</div>
        </div>
    );
};

export default Welcome;