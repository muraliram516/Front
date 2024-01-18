import React from 'react';

const CartContext = React.createContext({
    Items:[],
    totalAmuont: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;