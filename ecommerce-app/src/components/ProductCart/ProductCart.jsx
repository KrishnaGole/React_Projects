import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartAction";

function ProductCard({cart}){
    
  
    const calculateTotal = () =>{
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  

    return(
     <div className="product-card">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
        {cart.map((item) =>(
            <div key={item.id} className="cart-item">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Price: {item.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item)} className="remove-button">Remove</button>
            </div>
        ))}
        </div>
        <p className="total">Total: {calculateTotal()}</p>
     </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        cart: state.cart.cart,
    }
}

const mapDispatcherToProps = {
    removeFromCart,
}

export default connect(mapStateToProps, mapDispatcherToProps)(ProductCard);