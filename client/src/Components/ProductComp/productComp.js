import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { Container } from 'react-bootstrap';
import './productComp.css';
import { CartContext } from '../../Context/CartContext/CartContext';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import SuggestionProducts from "./SuggestionProducts";

export default function ProductComp(props) {
    const [cart, setCart] = useContext(CartContext);
    const [particularProduct, setParticularProduct] = useState("");
    const id = props.match.params.id;
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:5000/${id}`
        })
        .then(res=> setParticularProduct(res.data))
    }, [particularProduct]);

    const AddToCart = (item)=> {
        const productAddedToCart = {
            id: item._id,
            title: item.title,
            description: item.description,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: 1
        }
        setCart(current => {
            const productsInCart = cart.map(items=> items.id);
            if(productsInCart.includes(item._id)){
                const updateCart = current.map(currentItems=>{
                    if(currentItems.id === item._id){
                        return{
                            ...currentItems,
                            quantity: currentItems.quantity + 1
                        }
                    } else{
                        return currentItems
                    }
                });
                return updateCart;
            } else{
                return [...current, productAddedToCart]
            }
        })
        console.log(cart);
    }

    return (
        <div>
        <Container>
            <div className="top-container">
                <img className="productImage" src={particularProduct.imageUrl} alt="productImage" />
                <div className="rightSide">                    
                    <h1 className="productTitle">{particularProduct.title}</h1>
                    <p>M.R.P.: $ {particularProduct.price}</p>
                    <p>Selling price: $####</p>
                    <h3>In Stock</h3>
                    <button className="buyBtn">Buy Now</button>
                    <button onClick={()=> AddToCart(particularProduct)} className="cartBtn">Add to Cart</button>
                </div>
            </div>
            <hr />
            <div className="bottom-container">
                <h1>Description:</h1>
                <p>{particularProduct.description}</p>
                <hr />
                <div className="suggestions-column">
                    <h2>Suggestions: </h2>
                    <SuggestionProducts />
                </div>
            </div>
        </Container>
        </div>
    )
}
