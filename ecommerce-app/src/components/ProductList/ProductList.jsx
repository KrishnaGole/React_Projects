import React from "react";
import {Link} from 'react-router-dom';
import './ProductList.css';
import { connect } from 'react-redux';
import { addToCart } from "../../actions/cartAction";

function ProductList({ products }){
    return(
        <div className="product-list">
          {products.map((product) => (
              <Link key = {product.id} to={`/product/${product.id}`} className="product-card">
                 <p>{product.name}</p>
                 <p className="price">Price: {product.price}</p>
                 <p>Description: {product.description}</p>
                 <button onClick={() => addToCart(product)}>Add to Cart</button>
             </Link>
          ))}
        </div>
    );
}
const mapDispatcherToProps ={
    addToCart,
}

export default connect(null, mapDispatcherToProps)(ProductList);