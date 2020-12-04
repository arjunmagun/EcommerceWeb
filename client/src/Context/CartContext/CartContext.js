import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || []
    );
    
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cart))
    }, [cart]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}
