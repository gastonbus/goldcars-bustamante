import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "../EmptyCart/EmptyCart"

export const Cart = () => {
    const {purchaseCart, removeItemFromCart, clearCart} = useContext(CartContext);
    
    const navigate = useNavigate();

    if(purchaseCart.length > 0) {

        return (
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Item Total</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {purchaseCart.map(itemInCart => {
                        return (
                            <tr key={itemInCart.item.id}>
                                <td>{itemInCart.item.name}</td>
                                <td>{itemInCart.quantity}</td>
                                <td>U$S {itemInCart.item.price}</td>
                                <td>U$S {itemInCart.item.price * itemInCart.quantity}</td>
                                <td><button onClick={() => removeItemFromCart(itemInCart.item.id)}>Remove</button></td>
                                <td></td>
                            </tr>
                        )                   
                    })}                
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>U$S {purchaseCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0)}</td>
                        <td colSpan="4">
                            <button onClick={() => {navigate("/", { replace: false })}}>Add items</button>
                            <button onClick={() => {
                            clearCart();
                            navigate("/cart", { replace: false })
                            }}>Empty Cart</button>
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


