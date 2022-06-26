import React from "react";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import getItems from "../../utils/itemsPromise";
import itemsArray from "../../utils/items";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ text }) => {
    let { categoryId } = useParams();

    if (categoryId === undefined) {
        categoryId = "all";
    }

    const [items, setItems] = useState([]);

    
    useEffect(() => {
        const filterItems = (items) => {
            return categoryId !== "all" ? items.filter(item => item.category === categoryId) : items
        }
        getItems(itemsArray)
        .then(data => setItems(filterItems(data)))
        .catch(error => console.log(error))
    }, [categoryId])



    return (
        <section id="itemsContainer">
            { items.length > 0 ? <ItemList items={ items } /> : <Spinner /> }
            {/*Descomentar cuando sea el momento:
            <p id="listContainerText">{ text }</p>
             */}
        </section>
    )
}