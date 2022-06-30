import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState([]);
    
    const isInCart = (itemId) => {
        return itemsInCart.some(itemInCart => itemInCart.item.id === itemId);
    }

    /* IMPORTANTE: itemsInCart e itemToAdd tienen la forma {item:{...}, quantity: 1} */

    const addItemToCart = (itemToAdd) => { 
        //Logica para saber si un item esta en el Cart    
        if(isInCart(itemToAdd.item.id)) {
            //Logica que actualiza la cantidad del item existente
            const updatedItemsInCart = itemsInCart.map(itemInCart => {
                if (itemInCart.item.id === itemToAdd.item.id) {
                    itemInCart.quantity += itemToAdd.quantity;
                }
                return itemInCart;
            })
            console.log("El item ya se encuentra en el carrito");
            console.log(updatedItemsInCart);          
        } else {
            //Logica que agrega el item
            setItemsInCart([...itemsInCart, itemToAdd]);
        }
    }

    const removeItemFromCart = (itemId) => {
        setItemsInCart(itemsInCart.filter(itemInCart => itemInCart.item.id !== itemId));
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