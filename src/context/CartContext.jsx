import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState([]);

    const purchaseCart = [...itemsInCart]

    const isInCart = (itemId) => {
        return purchaseCart.some(itemInCart => itemInCart.id === itemId);
    }

    /* IMPORTANTE: itemsInCart e itemToAdd tienen la forma {item:{...}, quantity: 1} */
    const addItemToCart = (itemToAdd) => {   
        
        if(isInCart(itemToAdd.id)) {

            //Actualiza la cantidad del item existente
            setItemsInCart(purchaseCart.map(itemInCart => {
                if (itemInCart.id === itemToAdd.id) {
                    itemInCart.quantity += itemToAdd.quantity;
                }
                return itemInCart;
                })     
            ) 
        } else {
            //Agrega el item
            setItemsInCart([...purchaseCart, itemToAdd]);
        }
    }
    const removeItemFromCart = (itemId) => {
        setItemsInCart(purchaseCart.filter(itemInCart => itemInCart.id !== itemId));
    } 
    
    const clearCart = () => {
        setItemsInCart([]);
    }
    
    const totalQuantity = purchaseCart.reduce((accum, currentValue) => accum + currentValue.quantity, 0);
    
    return (
        <CartContext.Provider value={{purchaseCart, isInCart, addItemToCart, removeItemFromCart, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}