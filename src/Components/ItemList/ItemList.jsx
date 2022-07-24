import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Item } from "../Item/Item";

export const ItemList = ({items}) => {

    //Actualizar los stocks según lo que tiene el Cart.
    const {itemsInCart, isInCart} = useContext(CartContext);

    return (
        items.map(item => {
            return <Item 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
                stock={isInCart(item.id) ? item.stock - itemsInCart.find(elem => elem.item.id === item.id).quantity : item.stock} 
            />
        })     
    )
}