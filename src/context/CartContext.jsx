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
        if(isInCart(itemToAdd.id)) {
            //Logica que actualiza la cantidad del item existente
            console.log("El item ya se encuentra en el carrito");
            console.log(itemsInCart);
            setItemsInCart(itemsInCart.map(item => item.id === itemToAdd.item.id ? item.quantity = item.quantity + itemToAdd.quantity : item.quantity = item.quantity));          
        } else {
            //Logica que agrega el item
            setItemsInCart([...itemsInCart, itemToAdd]);     
        }
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