import React, {useEffect, useState} from 'react';
import './Product.css'
import axios from "axios";


const AddProduct = () => {
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
    const [name, setName] = useState("");
    const [supplier, setSupplier] = useState("");
    const [stock, setStock] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name : name,
            supplier : supplier,
            stock : stock
        }
        try {
            await axios.post('http://localhost:8080/api/v1/product',payload)
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
                        <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='add-input'>
                        <input type="text" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)}/>
                    </div>
                    <div className='add-input'>
                        <input type="number" placeholder="Stock"  value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                </div>
                <div className="addsubmit-container">
                    <div  onClick={(e) => {handleSubmit(e)}} className="update-submit">Create</div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;