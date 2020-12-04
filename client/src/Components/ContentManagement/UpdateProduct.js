import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import './updateProduct.css';

export default function UpdateProduct(props) {
    const [productDetails, setProductDetails] = useState("");
    const id = props.match.params.id;
    const history = useHistory();

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:5000/${id}`
        })
        .then(res=> setProductDetails(res.data));
    }, []);

    const handleChange =  ()=> {
        axios({
            method: "POST",
            data: productDetails,
            url: `http://localhost:5000/${id}/update`
        })
        history.push("/manage/products");
    }

    return (
        <div>
        <Container>
        <form id="form_update">
            <input 
                className='title_update'
                name="title" 
                value={productDetails.title} 
                onChange={(e)=> setProductDetails({...productDetails, title: e.target.value})} 
            />
            <input 
                className='description_update'
                name="description" 
                value={productDetails.description} 
                onChange={(e)=> setProductDetails({...productDetails, description: e.target.value})} 
            />
            <input 
                className='imageUrl_update'
                name="imageUrl" 
                value={productDetails.imageUrl} 
                onChange={(e)=> setProductDetails({...productDetails, imageUrl: e.target.value})} 
            />
            <input 
                className='price_update'
                name="price" 
                value={productDetails.price} 
                onChange={(e)=> setProductDetails({...productDetails, price: e.target.value})} 
            />
            <button className='update_btn' onClick={handleChange}>Update Product</button>
        </form>
        </Container>
        </div>
    )
}
