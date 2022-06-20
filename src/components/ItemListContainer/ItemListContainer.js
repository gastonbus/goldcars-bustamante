import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import itemsPromise from "../../utils/itemsPromise";
import itemsArray from "../../utils/items";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ text }) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
            itemsPromise(itemsArray)
            .then(data => 
                setItems(data))
    }, [])

    return (
        <section id="itemsContainer">
            <ItemList items={ items } />
            {/*Descomentar cuando sea el momento:
            <p id="listContainerText">{ text }</p>
            <ItemCount stock="8" initial={1} /> */}
        </section>
    )
}