import React from 'react';
import { useProductContext } from './ProductContext';

const Cart = () => {
  const { cart } = useProductContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cart.length}</p>
      <ul className="list-group">
        {cart.map((product, index) => (
          <li className="list-group-item" key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
