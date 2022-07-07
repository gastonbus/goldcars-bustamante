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

        let itemsCollection = [];

        if(categoryId) {
            itemsCollection = query(collection(db, "ItemCollection"), where("item.category", "==", categoryId));           
        } else {
            itemsCollection = collection(db, "ItemCollection");
        }



        getDocs(itemsCollection)
        .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        .catch(error => console.log(error))
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
            {/*Descomentar cuando sea el momento:
            <p id="listContainerText">{ text }</p>
             */}
        </section>
    )
}