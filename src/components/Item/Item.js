import "./Item.css";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({id, name, price, stock, image}) => {
    return (
        <article id="itemContainer" >
            <img src={image} alt={name} id="productImage" />
            <p id="itemName">{name}</p>
            <p id="itemPrice">Price: U$S {price}</p>
            <Link to={`/item/${id}`} id="itemMoreInfo">More info...</Link>    
            <p id="itemStock">Stock: {stock} units</p>
            <ItemCount stock="8" initial={1} />
        </article>
    )
}