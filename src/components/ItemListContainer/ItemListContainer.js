import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import productsPromise from "../../utils/productsPromise";
import products from "../../utils/products";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ text }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
            productsPromise(products)
            .then(response => setItems(response))
    }, []);
    return (
        <div id="itemsContainer">
            <ItemList products={ items } />
            {/*Descomentar cuando sea el momento:
            <p id="listContainerText">{ text }</p>
            <ItemCount stock="8" initial={1} /> */}
        </div>
    )
}