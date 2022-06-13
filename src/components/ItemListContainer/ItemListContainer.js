import "./ItemListContainer.css";
import { ItemCount } from "./ItemCount/ItemCount";

export const ItemListContainer = ({ text }) => {
    return (
        <>
            <p>{ text }</p>
            <ItemCount stock="10" initial={2} />
        </>
    )
}