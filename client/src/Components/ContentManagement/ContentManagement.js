import React, { useContext } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function ContentManagement() {
    const [products, setProducts] = useContext(ProductContext);
    const history = useHistory();

    const createHandle = async () => {
        history.push("/create")
    }

    const deleteProduct = async (id) => {
        await Axios({
            method: "DELETE",
            url: `http://localhost:5000/${id}/update`
        })
        .then(res=> console.log(res.data));

        setProducts(
            products.filter(el => el._id !== id)
        )
    }
    
    return (
        <div>
            <Container>
            <h1>All Products</h1>
            <Button onClick={createHandle} variant="secondary">Create Product</Button>
            <Row>
                {products.map(allProducts=>{
                    return(
                        <Col key={allProducts._id} lg={4} md={6} sm={12}>
                        <Card style={{ width: '20rem', marginTop: '30px' }}>
                            <Card.Img variant="top" src={allProducts.imageUrl} />
                            <Card.Body variant="left">
                                <Card.Title>{allProducts.title}</Card.Title>
                                <Card.Text>
                                    {allProducts.description.substring(0, 50)}
                                </Card.Text>
                                <Button 
                                    style={{margin: '10px'}}
                                    onClick={()=> history.push(`/manage/${allProducts._id}/update`)} 
                                    variant="primary"
                                >
                                    Update Product
                                </Button>
                                <Button 
                                    onClick={()=> deleteProduct(allProducts._id)} 
                                    variant="secondary"
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
            </Container>
        </div>
    )
}
