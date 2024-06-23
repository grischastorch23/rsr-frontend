import React from "react";
import Questions from "./questions/Questions";
import Product from "./product/Product";
import Feedback from "./feedback/Feedback";

const ProductDetails = () => {
    return (
        <div>
            <Product />
            <hr />
            <Questions/>
            <hr />
            <Feedback/>
        </div>
    ); 
};

export default ProductDetails;