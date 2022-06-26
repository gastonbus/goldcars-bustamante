import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";


export const ItemDetail = ({ item, isAddToCartButtonPressed, changeIsAddToCartButtonPressed }) => {
    const navigate = useNavigate();

    return (
        <article id="itemDetailContainer">
            <div>
            <img src={item.image} alt={item.name} id="itemDetailImage"/>
            </div>
            <div>
            <h1 id="itemDetailTitle">{item.name}</h1>
            <p id="itemDetailPrice">Price: U$S {item.price}</p>

            {isAddToCartButtonPressed ? 
            <button id="checkoutButton" onClick={() => navigate("/cart", { replace: false })}>Checkout</button> :
            <ItemCount stock={item.stock} initial={1} changeIsAddToCartButtonPressed={changeIsAddToCartButtonPressed}/> }
       
            <p id="itemDetailDescription">{item.description}</p>
            </div>
        </article>
    );
};
