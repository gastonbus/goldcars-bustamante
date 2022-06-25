import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
    return (
        <article id="itemDetailContainer">
            <div>
            <img src={item.image} alt={item.name} id="itemDetailImage"/>

            </div>
            <div>
            <h1 id="itemDetailTitle">{item.name}</h1>
            <p id="itemDetailPrice">Price: U$S {item.price}</p>
            <ItemCount stock="8" initial={1} />
            <p id="itemDetailDescription">{item.description}</p>

            </div>
        </article>
    );
};
