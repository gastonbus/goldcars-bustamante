import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "../EmptyCart/EmptyCart"
import "./Cart.css";

export const Cart = () => {
    const {itemsInCart, removeItemFromCart, clearCart} = useContext(CartContext);
    
    const navigate = useNavigate();

    if(itemsInCart.length > 0) {
        return (
            <table id="cartTable">
                <thead id="cartTableHeader">
                    <tr>
                        <td>Item</td>
                        <td>Cant</td>
                        <td>Precio</td>
                        <td>Subtotal</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody id="cartTableBody">
                    {itemsInCart.map(itemInCart => {
                        return (
                            <tr key={itemInCart.item.id}>
                                <td>{itemInCart.item.name}</td>
                                <td>{itemInCart.quantity}</td>
                                <td>$ {itemInCart.item.price}</td>
                                <td>$ {itemInCart.item.price * itemInCart.quantity}</td>
                                <td><button onClick={() => removeItemFromCart(itemInCart.item.id)}>Remove</button></td>
                                <td></td>
                            </tr>
                        )                   
                    })}                
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>$ {itemsInCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0)}</td>
                        <td colSpan="4">
                            <button id="addItemsButton" onClick={() => {navigate("/", { replace: false })}}>Add items</button>
                            <button id="resetCartButton" onClick={() => {
                            clearCart();
                            navigate("/cart", { replace: false })
                            }}>Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"></td>
                        <td colSpan="2"><button onClick={() => navigate("/form", { replace: false })}>Continue</button></td>
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return <EmptyCart />
    }
}


