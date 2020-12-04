import React, { useContext } from 'react';
import "./Home.css";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { CartContext } from "../../Context/CartContext/CartContext";
import { useHistory } from "react-router-dom";
import { ProductContext } from '../../Context/ProductContext/ProductContext';

function Home() {
    const [products, setProducts] = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);
    const history = useHistory();

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
            const productsIdInCart = cart.map(items=> items.id);
            if(productsIdInCart.includes(item._id)){
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
        <Container>
        <Row>
        {products.map(product=>{
            return(
                <Col key={product._id} lg={4} md={6} sm={12}>
                <Card id="card" style={{ width: '22rem', height:'28rem' }}>
                <Card.Img onClick={()=> history.push(`/product/${product._id}`)} variant="top" src={product.imageUrl} />
                    <Card.Body >
                    <div onClick={()=> history.push(`/product/${product._id}`)} >
                        <Card.Title>{product.title.substring(0, 20)}..</Card.Title>
                        <Card.Text>{product.description.substring(0, 40)}...</Card.Text>
                        <Card.Text style={{fontSize: "1.5em"}}>$ {product.price}</Card.Text>
                    </div>
                        <Button id="btn" variant="primary">Buy now</Button>
                        <Button onClick={()=> AddToCart(product)} variant="secondary">Add to cart</Button>
                    </Card.Body>
                </Card>
                </Col>
            )
        })}
        </Row>
        </Container>
    )
}

export default Home;