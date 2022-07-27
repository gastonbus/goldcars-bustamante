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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const allItems = collection(db, "ItemCollection")

        if(categoryId) {
            const filteredItems = query(allItems, where("category", "==", categoryId));
            getDocs(filteredItems)
            .then((snapshot) => {
                if(snapshot.size === 0) {
                    // Modificar para la entrega final
                    console.log("Hubo un error al obtener los datos.");
                }
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            getDocs(allItems)
            .then((snapshot) => {
                if(snapshot.size === 0) {
                    // Modificar para la entrega final
                    console.log("Hubo un error al obtener los datos.");
                }
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [categoryId])

    return (
        <section id="itemListContainer">
            { <p>{ text } <b>{categoryId}</b></p> }
            <div id="itemsContainer">
                { !loading ? <ItemList items={ items } /> : <Spinner /> }
            </div>
        </section>
    )
}