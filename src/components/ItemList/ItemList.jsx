import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({items}) => {
    return (
        items.map(item => 
            <Item 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
                stock={item.stock} 
            />
        )     
    )
}