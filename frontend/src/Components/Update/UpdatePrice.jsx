import React, {useEffect, useState} from 'react';
import './Update.css'
import axios from "axios";
import {useParams} from "react-router-dom";

const UpdatePrice = () => {
    const {id} = useParams();
    const [values,setValues] = useState({
        id:'',
        price: '',
        date: ''
    })
    const token = localStorage.getItem('accessToken');
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product/${id}/price/most-recent`)
            .then((response) => {
                setValues({...values,id: response.data.id, price: response.data.price, date: response.data.date})
            })
            .catch((error) => console.log(error));
    },[])

    function updateProductPrice(e) {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/product/${id}/price/${values.id}`,values)
            .then((response) => {
                window.location.href = '/welcome';
            })
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <div className='update-container'>
                <div className='update-header'>
                    <div className='update-text'>Update Product Price</div>
                    <div className="update-underline"></div>
                </div>
                <div className='update-inputs'>
                    <div className='update-input'>
                        <input type="number" placeholder="Price" value={values.price} onChange={(e) => setValues({...values,price: e.target.value})}/>
                    </div>
                    <div className='update-input'>
                        <input type="date" placeholder="Date" value={values.date} onChange={(e) => setValues({...values,date: e.target.value})}/>
                    </div>
                </div>
                <div className="updatesubmit-container">
                    <div onClick={(e) => {updateProductPrice(e)}} className="update-submit">Update</div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePrice;