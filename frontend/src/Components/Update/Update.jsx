import React, {useEffect, useState} from 'react';
import './Update.css'
import axios from "axios";
import {useParams} from "react-router-dom";

const Update = () => {
    const {id} = useParams();
    const [values,setValues] = useState({
        id:id,
        name: '',
        supplier: '',
        stock:''
    })
    const userToken = localStorage.getItem('accessToken');
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${userToken}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product/${id}`)
            .then((response) => {
                setValues({...values, name: response.data.name, supplier: response.data.supplier,stock: response.data.stock})
            })
            .catch((error) => console.log(error));
    },[])

    function updateProduct(e,id) {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/${id}`)
            .then((response) => {console.log(response.data)})
            .catch((error) => {
                return error
            });
    }
    function updateProduct(e) {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/product/${id}`,values)
            .then((response) => {
                window.location.href = '/welcome';
            })
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <div className='update-container'>
                <div className='update-header'>
                    <div className='update-text'>Update Product</div>
                    <div className="update-underline"></div>
                </div>
                <div className='update-inputs'>
                    <div className='update-input'>
                        <input type="text" placeholder="Product Name" value={values.name} onChange={(e) => setValues({...values,name: e.target.value})}/>
                    </div>
                    <div className='update-input'>
                        <input type="text" placeholder="Supplier" value={values.supplier} onChange={(e) => setValues({...values,supplier: e.target.value})}/>
                    </div>
                    <div className='update-input'>
                        <input type="number" placeholder="Stock" value={values.stock} onChange={(e) => setValues({...values,stock: e.target.value})}/>
                    </div>
                </div>
                <div className="updatesubmit-container">
                    <div onClick={(e) => {updateProduct(e)}} className="update-submit">Update</div>
                </div>
            </div>
        </div>
    );
};

export default Update;