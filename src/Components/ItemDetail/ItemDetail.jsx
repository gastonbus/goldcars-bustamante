import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


export const ItemDetail = ( {item} ) => {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const {addItemToCart} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
        addItemToCart({
            id: item.id, 
            item: {
                category: item.item.category,
                description: item.item.description,
                image: item.item.image,
                name: item.item.name,
                price: item.item.price,
                stock: item.item.stock,
            }, 
            quantity: quantityToAdd
        });
    }

    return (
        <article id="itemDetailContainer">
            <div>
            <img src={item.item.image} alt={item.item.name} id="itemDetailImage"/>
            </div>
            <div>
            <h1 id="itemDetailTitle">{item.item.name}</h1>
            <p id="itemDetailPrice">Price: U$S {item.item.price}</p>

            {quantity > 0 ? 
            <button id="checkoutButton" onClick={() => navigate("/cart", { replace: false })}>Checkout</button> :
            <ItemCount stock={item.item.stock} initial={1} onAdd={onAdd}/> }
       
            <p id="itemDetailDescription">{item.item.description}</p>
            </div>
        </article>
    );
};
