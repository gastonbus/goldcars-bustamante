import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>Gold Cars</h1>
                <ul>
                    <li>
                        <a href="/#">Deluxe</a>
                    </li>
                    <li>
                        <a href="/#">Sport</a>
                    </li>
                    <li>
                        <a href="/#">Family</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}