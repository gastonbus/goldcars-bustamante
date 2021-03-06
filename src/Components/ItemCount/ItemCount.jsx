import React from 'react';
import { useState } from 'react';
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const handleCount = (action) => {

        if (action === "add") {
            if (count === stock - 1) {
                document.getElementById("itemAddButton").style.color = "#bbbbbb";                
            }
            if (count >= 0) {
                document.getElementById("itemRemoveButton").style.color = "#000000";
            }
            if (count < stock) {
                setCount(count + 1);   
            }
        }
                
        if (action === "remove") {
            if (count < stock + 1) {
                document.getElementById("itemAddButton").style.color = "#000000";
            }
            if (count === 1) {
                document.getElementById("itemRemoveButton").style.color = "#bbbbbb";
            }  
            if (count > 0) {
                setCount(count - 1);
            }
        }       
    }
    
    return (
        <div id="itemCounterContainer">
            <div>
                <button id="itemRemoveButton" onClick={() => handleCount("remove")}>-</button>
                <span id="itemCounter">{count}</span>
                <button id="itemAddButton" onClick={() => handleCount("add")}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => onAdd(count)}>Add to Cart</button>
        </div>
    )
}