import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({children}){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/"
        })
        .then(res=>setProducts(res.data))
    })
    
    return(
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}