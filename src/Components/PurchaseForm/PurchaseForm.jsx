import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const PurchaseForm = () => {

    const {purchaseCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const date = new Date();

    const sendOrder = () => {
        const order = {
            buyer: {
                name: name, 
                phone: phone, 
                email: email 
            },
            items: purchaseCart, 
            date: date.toISOString(),
            total: purchaseCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0) //Aca va el valor total de la compra calculado en Cart
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "Orders");

        addDoc(ordersCollection, order)
            .then(({id}) => setOrderId(id))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>Please complete the following required data to complete your purchase.</h3>
            <form>
                <label>Name:</label>
                <input name="name" onChange={event => setName(event.target.value)}></input>
                <label>Phone:</label>
                <input name="phone" onChange={event => setPhone(event.target.value)}></input>
                <label>Email:</label>
                <input name="email" onChange={event => setEmail(event.target.value)}></input>
                <button onClick={() => sendOrder()}>Confirm Purchase</button>
            </form>
        </div>
    )
}