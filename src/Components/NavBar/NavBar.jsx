import React from "react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const NavBar = () => {

    const { itemsInCart } = useContext(CartContext);

    return (
        <nav>
            <div id="linksContainer">
                <div>
                    <h1>
                        <Link to="/">Gold Cars</Link>
                    </h1>
                </div>
                <div>
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
            </div>
            {itemsInCart.length > 0 && <CartWidget />}
        </nav>
    );
};
