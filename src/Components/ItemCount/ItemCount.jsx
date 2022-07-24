import React from 'react';
import { useState } from 'react';
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const handleCountRemove = () => {
        setCount(count - 1);
    }
    
    const handleCountAdd = () => {
        setCount(count + 1);
    }
    
    return (
        <div id="itemCounterContainer">
            <div>
                <button id="itemRemoveButton" disabled={count <= 1 && true} onClick={() => handleCountRemove()}>-</button>
                <span id="itemCounter">{count}</span>
                <button id="itemAddButton" disabled={count >= stock && true} onClick={() => handleCountAdd()}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => onAdd(count)}>Add to Cart</button>
        </div>
    )
}