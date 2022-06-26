import React from 'react';
import { useState } from 'react';
import "./ItemCount.css"

export const ItemCount = ({stock, initial, changeIsAddToCartButtonPressed}) => {

    const [count, setCount] = useState(initial);

    const handleCount = (action) => {
        if (action === "add") {
            if (count === stock - 1) {
                // @ts-ignore
                document.getElementById("itemAddButton").style.color = "#bbbbbb";                
            }
            if (count >= 0) {
                // @ts-ignore
                document.getElementById("itemRemoveButton").style.color = "#000000";
            }
            if (count < stock) {
                setCount(count + 1);   
            }
        }
                
        if (action === "remove") {
            if (count < stock + 1) {
                // @ts-ignore
                document.getElementById("itemAddButton").style.color = "#000000";
            }
            if (count === 1) {
                // @ts-ignore
                document.getElementById("itemRemoveButton").style.color = "#bbbbbb";
            }  
            if (count > 0) {
                setCount(count - 1);
            }
        }
    }

    const addToCart = (quantity) => {
        // Aca van las acciones necesarias para incrementar la cantidad de items a comprar en el CartWidget
        changeIsAddToCartButtonPressed(true);
    }

    return (
        <div id="itemCounterContainer">
            <div>
                <button id="itemRemoveButton" onClick={() => handleCount("remove")}>-</button>
                <span id="itemCounter">{count}</span>
                <button id="itemAddButton" onClick={() => handleCount("add")}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => addToCart({count})}>Add to Cart</button>
        </div>

    )
}