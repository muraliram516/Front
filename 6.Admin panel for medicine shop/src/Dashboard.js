import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Medicine Shop Admin Dashboard</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      
      <div style={{ position: 'fixed', top: '10px', right: '10px', textAlign: 'center' }}>
        <button onClick={toggleCartVisibility} style={{ fontSize: '24px', cursor: 'pointer' }}>
          🛒
        </button>
        {isCartVisible && (
          <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', position: 'absolute', top: '40px', right: '0', width: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: '1' }}>
            <h2>Shopping Cart</h2>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {cart.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  {item.MedicineName} - ${item.Price}{' '}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;