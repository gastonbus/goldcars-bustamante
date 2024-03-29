import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


export const ItemDetail = ( {item} ) => {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const {itemsInCart, isInCart, addItemToCart} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
        addItemToCart({
            item: {
                id: item.id,
                category: item.category,
                description: item.description,
                image: item.image,
                name: item.name,
                price: item.price,
                stock: item.stock,
            }, 
            quantity: quantityToAdd
        });
    }

    return (
        <article id="itemDetailContainer">
            <div>
                <img src={item.image} alt={item.name} id="itemDetailImage"/>
            </div>
            <div>
                <h1 id="itemDetailTitle">{item.name}</h1>
                <p id="itemDetailPrice">Price: $ {item.price}</p>

                {quantity > 0 ? 
                <button id="checkoutButton" onClick={() => navigate("/cart", { replace: false })}>Checkout</button> :
                <ItemCount stock={isInCart(item.id) ? item.stock - itemsInCart.find(elem => elem.item.id === item.id).quantity : item.stock} initial={1} onAdd={onAdd}/> }
        
                <p id="itemDetailDescription">{item.description}</p>
            </div>
        </article>
    );
};
