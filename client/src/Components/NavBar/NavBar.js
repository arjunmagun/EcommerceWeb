import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./NavBar.css";

export default function NavBarEcom() {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Buyer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="/create">Create</Nav.Link> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline">Search</Button>
                <Nav.Link style={{color: "grey"}} href="/cart">
                    Cart
                    <div className={cart.length >= 1 ? "filledCart" : "emptyCart"}>
                        {cart.length}
                    </div>
                </Nav.Link>
                </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
