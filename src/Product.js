import React from "react";
import { useParams } from "react-router-dom";

function Product(){

    const {id}=useParams()

    return(
        <div>
            <h1>useParams</h1>

            <h2>Welcome to Products</h2>
            <p>Product: {id} </p>
        </div>
    )
}
export default Product;