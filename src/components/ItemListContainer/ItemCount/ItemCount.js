import { useState } from 'react';
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleCount = (action) => {
        if (action === "add" && count < stock) {
            setCount(count + 1)
        }
        
        if (action === "remove" && count > 0) {
            setCount(count - 1)   
        }
    }
    return (
        <div className="itemCounterContainer">
            <button id="itemRemoveButton" onClick={() => handleCount("remove")}>-</button>
            <span className="itemCounter">{count}</span>
            <button id="itemAddButton" onClick={() => handleCount("add")}>+</button>
        </div>

    )
}