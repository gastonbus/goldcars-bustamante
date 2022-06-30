import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ( {item} ) => {
    const navigate = useNavigate();

    // const [quantity, setQuantity] = useState(0);

    const [isCheckoutButtonVisible, setIsCheckoutButtonVisible] = useState(false);

    const {addItemToCart} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        // setQuantity(quantityToAdd);
        addItemToCart({item, quantity: quantityToAdd});
        // console.log(quantity);
        setIsCheckoutButtonVisible(true);
    }
    // console.log(quantity);

    return (
        <article id="itemDetailContainer">
            <div>
            <img src={item.image} alt={item.name} id="itemDetailImage"/>
            </div>
            <div>
            <h1 id="itemDetailTitle">{item.name}</h1>
            <p id="itemDetailPrice">Price: U$S {item.price}</p>

            {isCheckoutButtonVisible ? 
            <button id="checkoutButton" onClick={() => navigate("/cart", { replace: false })}>Checkout</button> :
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> }
       
            <p id="itemDetailDescription">{item.description}</p>
            </div>
        </article>
    );
};
