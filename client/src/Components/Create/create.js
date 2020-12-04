import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios'

import './create.css';

const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handleDescription(e){
        setDescription(e.target.value)
        
    }
    
    function handleImage(e){
        setImage(e.target.value)
        
    }
    function handlePrice(e){
        setPrice(e.target.value)
        
    }

    function handleChange(e){
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                title,
                description,
                imageUrl: image,
                price
            },
            withCredentials: true,
            url: "http://localhost:5000/newProduct"
        })
        .then(res=> console.log(res))
    }

    return (
        <div>
        <Container>
            <h1>Add a product</h1>
            <form id='form_create'>
                <input 
                    className='title_create'
                    placeholder='title' 
                    name='title' 
                    value={title} 
                    onChange={handleTitle} 
                    required 
                />
                <input 
                    className='description_create'
                    name='description' 
                    value={description} 
                    placeholder='description' 
                    onChange={handleDescription} 
                    required 
                />
                <input 
                    className='imageUrl_create'
                    name='image' 
                    value={image} 
                    placeholder='image' 
                    onChange={handleImage} 
                    required 
                />
                <input 
                    className='price_create'
                    name='price' 
                    value={price} 
                    placeholder='price' 
                    onChange={handlePrice} 
                    required 
                />
                <input className='submit_btn' type='submit' onClick={handleChange} />
            </form>
        </Container>
        </div>
    )
}

export default Create;