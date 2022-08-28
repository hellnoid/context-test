import React from "react";
export const CartContext =React.createContext();

export function CartContextProvider({children}){
    const [cartCount,setCartCount] =React.useState(0);

    const handleCartUpdate = (val)=>{
        setCartCount(cartCount+val);
    };

    return (
        <CartContext.Provider value={{cartCount,handleCartUpdate}}>{children}</CartContext.Provider>
    );
}