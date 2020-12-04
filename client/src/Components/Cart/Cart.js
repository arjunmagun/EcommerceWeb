import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext/CartContext';
import CartItem from "./CartItem";

export default function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return (
        <Container>
        <h1>Total items in cart: {cart.length}</h1>
        <h3>Total Amount: ${totalPrice}</h3>
        {cart.map((cartItem)=>{
            return(
                <CartItem 
                    key={cartItem.id}
                    title= {cartItem.title}
                    description={cartItem.description}
                    price={cartItem.price}
                    imageUrl={cartItem.imageUrl}
                    quantity={cartItem.quantity}
                    cartItem={cartItem}
                />
            )
        })}
        </Container>
    )
}
