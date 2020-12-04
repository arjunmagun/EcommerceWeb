import React, { useContext} from 'react';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import { Card, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


export default function SuggestionProducts() {
    const [products, setProduct] = useContext(ProductContext);
    const history = useHistory();
    return (
        <div>
        <Row>
            {products.map(product=>{
                return(
                    <Col md={3}>
                    <Card onClick={()=> history.push(`/product/${product._id}`)} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.imageUrl} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          {product.description.substring(0,40)}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                    </Col>
                )
            })}
        </Row>
        </div>
    )
}
