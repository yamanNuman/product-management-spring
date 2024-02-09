import React, {useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from "../Navbar/Navbar";

const Welcome = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

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
                <h1>Products</h1>
           <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Supplier</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product,index) => {
                    return <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.supplier}</td>
                        <td>{product.stock}</td>
                        <td>{product.price[product.price.length-1].price}</td>
                        <td>{product.price[product.price.length-1].date}</td>
                    </tr>
                })
                }
                </tbody>
           </table>
       </div>

    );
};

export default Welcome;