import React from "react";
import { CartContext } from "./CartComponent";

export default ({children})=>{
    const {cartCount,handleCartUpdate} =React.useContext(CartContext);
    console.log(cartCount,handleCartUpdate);
    return <button onClick={()=>{handleCartUpdate(2)}}>{children}</button>
}