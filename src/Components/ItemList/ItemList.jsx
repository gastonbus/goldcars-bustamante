import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({items}) => {

    return (
        items.map(item => {
            return <Item 
                key={item.id} 
                id={item.id} 
                image={item.item.image} 
                name={item.item.name} 
                price={item.item.price} 
                stock={item.item.stock} 
            />
        }
        )     
    )
}