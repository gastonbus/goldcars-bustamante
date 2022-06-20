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
                        <Link to="/#">Deluxe</Link>
                    </li>
                    <li>
                        <Link to="/#">Sport</Link>
                    </li>
                    <li>
                        <Link to="/#">Family</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};
