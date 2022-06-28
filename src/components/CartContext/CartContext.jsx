import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState([]);
    
    const isInCart = (itemId) => {
        //logica para saber si un item esta en el Cart
        return itemsInCart.some(item => item.id === itemId);
    }

    const addItemToCart = (itemToAdd) => {
        //Logica para agregar 1 item al Cart
        console.log(itemToAdd);
        console.log(itemsInCart);
        setItemsInCart([...itemsInCart, itemToAdd]);
        console.log(itemsInCart);       
    }

    const removeItemFromCart = (itemId) => {
        //logica para remover 1 item del Cart

        //Opcion 1:
        // const position = itemsInCart.map(item => item.id).indexOf(itemId);
        // itemsInCart.splice(position, 1);

        //Opcion 2:
        setItemsInCart(itemsInCart.filter(item => item.id !== itemId));
    } 

    const clearCart = () => {
        setItemsInCart([]);
    }

    return (
        <CartContext.Provider value={{itemsInCart, isInCart, addItemToCart, removeItemFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}