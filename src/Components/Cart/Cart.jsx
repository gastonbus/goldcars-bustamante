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
            <div id="cartTable">
                <div className="cartTableHeaderRow">
                    <div className="cartTableCell">Item</div>
                    <div className="cartTableCell">Cant</div>
                    <div className="cartTableCell">Precio</div>
                    <div className="cartTableCell">Subtotal</div>
                    <div className="cartTableCell"></div>
                </div>
                {itemsInCart.map(itemInCart => {
                    return (
                        <div className="cartTableRow" key={itemInCart.item.id}>
                            <div className="cartTableCell">{itemInCart.item.name}</div>
                            <div className="cartTableCell">{itemInCart.quantity} un.</div>
                            <div className="cartTableCell">${itemInCart.item.price}</div>
                            <div className="cartTableCell">${itemInCart.item.price * itemInCart.quantity}</div>
                            <div className="cartTableCell">
                                <button id="addItemButton" onClick={() => {}}>+</button>
                                <button id="substractItemButton" onClick={() => {}}>-</button>
                                <button id="removeItemButton" onClick={() => removeItemFromCart(itemInCart.item.id)}>Quitar</button>
                                </div>
                        </div>
                    )
                })}
                <div className="cartTableRow" >
                    <div className="cartTableCell">Total</div>
                    <div className="cartTableCell">{/* Aca poner calculo de cantidad total de items */}</div>
                    <div className="cartTableCell"></div>
                    <div className="cartTableCell">${itemsInCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0)}</div>
                    <div className="cartTableCell">
                        <button id="addItemsButton" onClick={() => {navigate("/", { replace: false })}}>Add items</button>
                    </div>
                </div>
                <div className="cartTableRow" >
                    <div className="cartTableCell"></div>
                    <div className="cartTableCell"></div>
                    <div className="cartTableCell"></div>
                    <div className="cartTableCell">
                        <button id="resetCartButton" onClick={() => {
                        clearCart();
                        navigate("/cart", { replace: false })
                        }}>Vaciar</button>
                    </div>
                    <div className="cartTableCell">
                        <button id="continueButton" onClick={() => navigate("/form", { replace: false })}>Continuar Compra</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <EmptyCart />
    }
}


