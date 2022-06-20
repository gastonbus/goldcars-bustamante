import "./Item.css";
import { Link } from "react-router-dom";
export const Item = ({id, name, price, stock, image}) => {
    return (
        <article id="itemContainer" >
            <img src={image} alt={name} id="productImage" />
            <p id="itemName">{name}</p>
            <p id="itemPrice">Price: U$S {price}</p>
            <p id="itemStock">Available stock: {stock} units</p>
            <Link to={`/item/${id}`} id="itemMoreInfo">More info...</Link>    
        </article>
    )
}