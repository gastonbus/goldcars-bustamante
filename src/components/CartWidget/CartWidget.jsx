import React from "react";
import { BsCartFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import "./CartWidget.css"; 
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext);

    return (
    <IconContext.Provider value={{ size:"2em" }}>
        <div className="cartIconContainer">
            <Link to="/cart">
                <BsCartFill className='cartIcon'/>    
                <span className='quantity'>{totalQuantity}</span>
            </Link>
        </div>
    </IconContext.Provider> 
    )    
}