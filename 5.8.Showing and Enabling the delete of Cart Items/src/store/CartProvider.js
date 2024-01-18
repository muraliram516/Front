import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
if(action.type === 'ADD')
{
     const updatedItems = state.items.concat(action.item);
     const updatedTotalAmount = state.totalAmuont + action.item.price * action.item.amount;      
 return {
items:  updatedItems,
totalAmuont: updatedTotalAmount
 }
}    
return defaultCartState;
};

const CartProvider = props => {
   const [cartState, dispatchCartAction] = userReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) =>  {
        dispatchCartAction({type: 'Add', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    
   const cartContext = {
    Items: cartState.items,
    totalAmuont: cartState.totalAmuont,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
   }; 

   return <CartContext.Provider>
    {props.children}
    </CartContext.Provider>
}