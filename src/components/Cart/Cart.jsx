import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const {purchaseCart, removeItemFromCart, clearCart} = useContext(CartContext);
    
    const navigate = useNavigate();

    return (
        <table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {purchaseCart.map(itemInCart => {
                    return (
                        <tr key={itemInCart.id}>
                            <td>{itemInCart.item.name}</td>
                            <td>{itemInCart.quantity}</td>
                            <td>U$S {itemInCart.item.price}</td>
                            <td>U$S {itemInCart.item.price * itemInCart.quantity}</td>
                            <td><button onClick={() => removeItemFromCart(itemInCart.item.id)}>Remove</button></td>
                        </tr>
                    )                   
                })}                
                <tr>
                    <td colSpan="3">Purchase Total</td>
                    <td>U$S {purchaseCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0)}</td>
                    <td colSpan="4">
                        <button onClick={() => {navigate("/", { replace: false })}}>Add items</button>
                        <button onClick={() => {
                        clearCart();
                        navigate("/cart", { replace: false })
                        }}>Empty Cart</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


