import React, {useEffect, useState} from 'react';
import './Product.css'
import axios from "axios";
import {useParams} from "react-router-dom";


const AddPrice = () => {
    const {id} = useParams();
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
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            price : price,
            date : date
        }
        try {
            await axios.post(`http://localhost:8080/api/v1/product/${id}/price`,payload)
            window.location.href = '/welcome'

        } catch (error) {
            return error;
        }
    }

    return (
        <div>
            <div className='add-container'>
                <div className='add-header'>
                    <div className='add-text'>Create Product</div>
                    <div className="add-underline"></div>
                </div>
                <div className='add-inputs'>
                    <div className='add-input'>
                        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className='add-input'>
                        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                <div className="addsubmit-container">
                    <div  onClick={(e) => {handleSubmit(e)}} className="update-submit">Create</div>
                </div>
            </div>
        </div>
    );
};

export default AddPrice;