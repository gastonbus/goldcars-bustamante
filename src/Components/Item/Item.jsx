import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({id, name, price, stock, image}) => {
    return (
        <article id="itemContainer">
            <div>
                <img src={image} alt={name} id="productImage" />
                <p id="itemName">{name}</p>
            </div>
            <div>
                <p id="itemPrice">Precio: $ {price}</p>
                <Link to={`/item/${id}`} id="itemMoreInfo"><button id="moreInfo">Más info...</button></Link>    
                <p id="itemStock">Stock: {stock} un.</p>
            </div>
        </article>
    )
}