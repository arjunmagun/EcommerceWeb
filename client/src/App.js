import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './Components/Home/home';
import ProductComp from './Components/ProductComp/productComp';
import create from './Components/Create/create';
import Cart from './Components/Cart/Cart';
import Navbar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from "./Context/CartContext/CartContext";
import { ProductProvider } from "./Context/ProductContext/ProductContext";
import ContentManagement from "./Components/ContentManagement/ContentManagement";
import UpdateProduct from "./Components/ContentManagement/UpdateProduct";

export default function App() {
  return (
    <Router>
      <div>
      <ProductProvider>
        <CartProvider>
        <Navbar/>
          <Route exact path="/" component={home} />
          <Route exact path="/product/:id" component={ProductComp} />
          <Route exact path="/create" component={create} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/manage/products" component={ContentManagement} />
          <Route exact path="/manage/:id/update" component={UpdateProduct} />
        </CartProvider>
      </ProductProvider>
      </div>
    </Router>
  );
}
