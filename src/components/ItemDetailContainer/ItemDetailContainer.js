import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import itemsPromise from "../../utils/itemsPromise";
import itemsArray from "../../utils/items";
import { Spinner } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState();

    useEffect(() => {
        itemsPromise(itemsArray)
            .then(data => setItem(data.find(item => item.id === itemId))
        );
    }, [itemId]);

    return (
        <section>
            { item ? <ItemDetail item={ item } /> : <Spinner /> }
        </section>
    );
};
