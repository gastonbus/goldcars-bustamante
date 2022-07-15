import React from "react";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
// import getItems from "../../utils/itemsPromise";
// import itemsArray from "../../utils/items";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const ItemListContainer = ({ text }) => {
    let { categoryId } = useParams();

    // if (categoryId === undefined) {
    //     categoryId = "all";
    // }

    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const allItems = collection(db, "ItemCollection")

        if(categoryId) {
            const filteredItems = query(allItems, where("item.category", "==", categoryId));
            getDocs(filteredItems)
            .then((snapshot) => {
                if(snapshot.size === 0) {
                    // Modificar para la entrega final
                    console.log("No items to show.");
                }
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
        } else {
            getDocs(allItems)
            .then((snapshot) => {
                if(snapshot.size === 0) {
                    // Modificar para la entrega final
                    console.log("No items to show.");
                }
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
        }
    }, [categoryId])

/*     useEffect(() => {
        const filterItems = (items) => {
            return categoryId !== "all" ? items.filter(item => item.category === categoryId) : items
        }
        getItems(itemsArray)
        .then(data => setItems(filterItems(data)))
        .catch(error => console.log(error))
    }, [categoryId]) */

    return (
        <section id="itemsContainer">
            { items.length > 0 ? <ItemList items={ items } /> : <Spinner /> }
            {/*Descomentar para entrega final:
            <p id="listContainerText">{ text }</p>
             */}
        </section>
    )
}