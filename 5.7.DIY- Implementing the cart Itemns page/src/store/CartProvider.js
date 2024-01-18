import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = (item) =>  {};
    const removeItemFromCartHandler = (id) => {};

   const cartContext = {
    Items:[],
    totalAmuont: 0,
    addItem,
    removeItem:
   }; 

   return <CartContext.Provider>
    {props.children}
    </CartContext.Provider>
}