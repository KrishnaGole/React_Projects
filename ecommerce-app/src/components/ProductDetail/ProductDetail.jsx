import React from "react";
import './ProductDetail.css';
import { connect } from 'react-redux';
import { addToCart } from "../../actions/cartAction";


function ProductDetail({product, addToCart}){
    console.log(product)
    if(!product){
        return <div className="product-detail">No product selected.</div>
    }
    return(
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p className="price"> Price: {product.price}</p>
            <p>{product.description}</p>
            <button onClick={() =>  addToCart(product)}>Add to Cart</button>
        </div>
    );
}

const mapDispatcherToProps ={
    addToCart,
}

export default connect(null, mapDispatcherToProps)(ProductDetail);