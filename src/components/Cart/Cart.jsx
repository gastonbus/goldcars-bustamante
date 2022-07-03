import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

/* const itemsArrayPrueba = [
    {
        item: 
        {
            id: "1",
            category: "deluxe",
            name: 'Tesla Model S',
            price: 200000,
            stock: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat sunt eius error aut qui voluptatum nemo, cupiditate atque labore officia quaerat reprehenderit vero maiores mollitia excepturi ratione? Omnis, harum.",
            image: 'https://real-luxury.es/media/tz_portfolio_plus/article/cache/noleggio-ferrari-488-gtb-spider-2-21_o.png'
        },
        quantity: 342
    },
    {
        item: 
        {
            id: "2",
            category: "deluxe",
            name: 'Tesla Model S',
            price: 200000,
            stock: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat sunt eius error aut qui voluptatum nemo, cupiditate atque labore officia quaerat reprehenderit vero maiores mollitia excepturi ratione? Omnis, harum.",
            image: 'https://real-luxury.es/media/tz_portfolio_plus/article/cache/noleggio-ferrari-488-gtb-spider-2-21_o.png'
        },
        quantity: 56
    },
    {
        item: 
        {
            id: "3",
            category: "deluxe",
            name: 'Tesla Model S',
            price: 200000,
            stock: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat sunt eius error aut qui voluptatum nemo, cupiditate atque labore officia quaerat reprehenderit vero maiores mollitia excepturi ratione? Omnis, harum.",
            image: 'https://real-luxury.es/media/tz_portfolio_plus/article/cache/noleggio-ferrari-488-gtb-spider-2-21_o.png'
        },
        quantity: 23
    },
    {
        item: 
        {
            id: "7",
            category: "deluxe",
            name: 'Tesla Model S',
            price: 200000,
            stock: 25,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat sunt eius error aut qui voluptatum nemo, cupiditate atque labore officia quaerat reprehenderit vero maiores mollitia excepturi ratione? Omnis, harum.",
            image: 'https://real-luxury.es/media/tz_portfolio_plus/article/cache/noleggio-ferrari-488-gtb-spider-2-21_o.png'
        },
        quantity: 241
    },
]
 */
export const Cart = () => {
    const {itemsInCart, removeItemFromCart, clearCart} = useContext(CartContext);

    return (
        <table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Item price</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                {itemsInCart.map(itemInCart => {
                    return (
                        <tr key={itemInCart.item.id}>
                            <td>{itemInCart.item.name}</td>
                            <td>{itemInCart.quantity}</td>
                            <td>U$S {itemInCart.item.price}</td>
                            <td>U$S {itemInCart.item.price * itemInCart.quantity}</td>
                            <td><button /* onClick={removeItemFromCart(itemInCart.item.id)} */>Remove</button></td>
                        </tr>
                    )                   
                })}                
                <tr>
                    <td colSpan="4">Purchase Total</td>
                    <td>{itemsInCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0)}</td>
                </tr>
            </tbody>
        </table>
    )

}


