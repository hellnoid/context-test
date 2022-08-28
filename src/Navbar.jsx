import React from "react";
import { CartContext } from "./CartComponent";

export default ()=>{
    const {cartCount}=React.useContext(CartContext);
    return <div style={{height:"80px", width:"500px", background:"yellow",color:"black"}}>
        Button Count: {cartCount}
    </div>
}
