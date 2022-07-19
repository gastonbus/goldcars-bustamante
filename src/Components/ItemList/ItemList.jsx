import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({items}) => {

    return (
        items.map(elem => {
            return <Item 
                key={elem.id} 
                id={elem.id} 
                image={elem.image} 
                name={elem.name} 
                price={elem.price} 
                stock={elem.stock} 
            />
        }
        )     
    )
}