import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const PurchaseForm = ({setOrderId}) => {

    const {purchaseCart} = useContext(CartContext);


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''    
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const date = new Date();

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: {
                name: formData.name, 
                phone: formData.phone, 
                email: formData.email 
            },
            items: purchaseCart, 
            date: date.toISOString(),
            total: purchaseCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0) 
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "Orders");

        addDoc(ordersCollection, order)
            .then(({id}) => setOrderId(id))
            .catch((error) => {
                console.log(error);
                setOrderId("error");
            })
    }

    return (
        <div>
            <h3>Please complete the following required data to complete your purchase.</h3>
            <form onSubmit={sendOrder}>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleInputChange}></input>
                <label>Phone:</label>
                <input type="text" name="phone" onChange={handleInputChange}></input>
                <label>Email:</label>
                <input type="email" name="email" onChange={handleInputChange}></input>
                <button type="submit">Confirm Purchase</button>
            </form>
        </div>
    )
}