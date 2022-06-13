import "./ItemListContainer.css";
import { ItemCount } from "./ItemCount/ItemCount";

export const ItemListContainer = ({ text }) => {
    return (
        <div id="itemsContainer">
            <p id="listContainerText">{ text }</p>
            <ItemCount stock="8" initial={1} />
        </div>
    )
}