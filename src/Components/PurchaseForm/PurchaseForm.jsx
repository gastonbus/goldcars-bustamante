import { addDoc, doc, getFirestore, collection, updateDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Spinner } from "../Spinner/Spinner";

export const PurchaseForm = () => {

    const {purchaseCart, clearCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState();

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
        setOrderId("loading");
        
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
        .then(({id}) => {
            setOrderId(id);
            purchaseCart.forEach(elem => {
                const itemDoc = doc(db, "ItemCollection", elem.item.id);
                updateDoc(itemDoc, {stock: elem.item.stock - elem.quantity})
                .then(() => console.log("Se actualizó el stock del item: ", elem.item.id))
                .catch(error => console.log(error))
            })
            clearCart();
        })
        .catch((error) => {
            console.log(error);
            setOrderId("error");
        })
        

    }
    
    if (!orderId) {
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
    } else {
        return orderId === "loading" ? <Spinner /> : 
            orderId === "error" ? <div>Ha ocurrido un error en el proceso de compra.</div> : 
                <div>Se ha confirmado su compra con el id <b>{orderId}</b></div>
    }
}