import { createContext, useContext, useState } from "react";



const CartContext = createContext();
export const CartProvider=({children})=>{
    const [cartItem,setCartItem]=useState([]);
    const addToCart=(item)=>{
      setCartItem([...cartItem,item]);
    };
    const removeFromCart=(item)=>{
        setCartItem(cartItem.filter((value)=>value!==item))
    };
    return(
        <CartContext.Provider value={{cartItem,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart=()=>{
    return useContext(CartContext)
}