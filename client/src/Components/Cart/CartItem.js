import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function CartItem({
    title,
    description,
    price,
    imageUrl, 
    quantity,
    cartItem
}){
    const [cart, setCart] = useContext(CartContext);
    const remove = (el)=> {
        const removeOne= cart.filter(product=> product.id !== el.id);
        setCart(removeOne)
    };

    const decreaseQuantity = (qty)=> {
        console.log(qty );
    }


    const increaseQuantity = (itemsInCart)=>{
        return{
            ...itemsInCart,
            quantity: itemsInCart.quantity + 1
        }
    }

    return (
        <div>
            <Card id="card" style={{ display: 'flex', flexDirection: 'row', width: "50rem", height: "15rem"}}>
            <Card.Img style={{width: "20rem"}} src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text style={{fontSize: "1.5em"}}>${price}</Card.Text>
                    <Button id="btn" variant="primary">Buy now</Button>
                    <Button id="btnRemove" onClick={()=> remove(cartItem)} variant="secondary">X</Button>
                    <Card.Text>
                        <Button onClick={()=> decreaseQuantity(cartItem)} variant="outlined">-</Button>
                            {quantity}
                        <Button onClick={()=> increaseQuantity(cartItem)} variant="outlined">+</Button>
                    </Card.Text>
                    {/* <Button onClick={()=> AddToCart(product)} variant="secondary">Add to cart</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
