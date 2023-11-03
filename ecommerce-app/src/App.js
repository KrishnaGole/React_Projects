import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductCard from './components/ProductCart/ProductCart';
import store from './store';
import { Provider } from 'react-redux';

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is the description of product 1",
    quantity: 0
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is the description of product 2",
    quantity: 0
  }
]

function ProductWithId({addToCart}) {
   const { id } = useParams();
  const productId = Number(id);
  const selectedProduct = sampleProducts.find((product) => product.id === productId);
  return <ProductDetail product={selectedProduct} addToCart={addToCart} />
}
function App() {
  //const [cart, setCart] = useState([]);
    
  // const addToCart = (product) =>{
  //     const updatedCart = [...cart];
  //     const existingProduct = updatedCart.find((item) => item.id === product.id);
  //     if(existingProduct){
  //       existingProduct.quantity += 1;
  //     }else{
  //       updatedCart.push({...product, quantity: 1});
  //     }
  //     setCart(updatedCart);
  // }
  
  // const removeFromCart = (product) =>{
  //   const updatedCart = [...cart];
  //   const existingProduct = updatedCart.find((item) => item.id === product.id);
  //   if(existingProduct.quantity){
  //      existingProduct.quantity -= 1;
  //      if(existingProduct.quantity === 0){
  //        const productIndex = updatedCart.indexOf(existingProduct);
  //        if(productIndex > -1){
  //          updatedCart.splice(productIndex, 1);
  //        }
  //      }
  //      setCart(updatedCart);
  //   }
  // }
 
  return (
  <Provider store={store}>
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={sampleProducts}  />} />
        <Route path="/product/:id" element={<ProductWithId />} />
        <Route path="/cart" element={<ProductCard cart={cart} />} /> 
      </Routes>
    </Router>
  </div>
  </Provider>
  );
}


export default App;
