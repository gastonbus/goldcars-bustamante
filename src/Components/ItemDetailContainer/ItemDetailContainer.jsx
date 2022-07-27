import React from "react";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState();

    useEffect(() => {
        const db = getFirestore();
        const selectedItem = (doc(db, "ItemCollection", itemId));
        getDoc(selectedItem)
        .then((snapshot) => {
            if(snapshot.exists()) {
                setItem({id: snapshot.id, ...snapshot.data()});
            }
        })
        .catch(error => console.log(error))
    }, [itemId])
    return (
        <section>
            { item ? <ItemDetail item={item} /> : <Spinner /> }
        </section>
    );
};
