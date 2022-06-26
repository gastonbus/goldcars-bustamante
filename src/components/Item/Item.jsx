import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({id, name, price, stock, image}) => {
    return (
        <article id="itemContainer" >
            <img src={image} alt={name} id="productImage" />
            <p id="itemName">{name}</p>
            <p id="itemPrice">Price: U$S {price}</p>
            <Link to={`/item/${id}`} id="itemMoreInfo">More info...</Link>    
            <p id="itemStock">Stock: {stock} units</p>
        </article>
    )
}