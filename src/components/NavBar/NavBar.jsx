import React from "react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const NavBar = () => {

    const { purchaseCart } = useContext(CartContext);

    return (
        <nav>
            <div>
                <h1>
                    <Link to="/">Gold Cars</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/category/deluxe">Deluxe</Link>
                    </li>
                    <li>
                        <Link to="/category/sport">Sport</Link>
                    </li>
                    <li>
                        <Link to="/category/family">Family</Link>
                    </li>
                </ul>
            </div>
            {purchaseCart.length > 0 && <CartWidget />}
        </nav>
    );
};
