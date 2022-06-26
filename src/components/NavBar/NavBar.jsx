import React from "react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
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
            <CartWidget />
        </nav>
    );
};
