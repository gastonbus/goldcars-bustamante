import { addDoc, doc, getFirestore, collection, updateDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Spinner } from "../Spinner/Spinner";
import "./PurchaseForm.css";

export const PurchaseForm = () => {

    const navigate = useNavigate();

    const {itemsInCart, clearCart} = useContext(CartContext);

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
            items: itemsInCart, 
            date: date.toISOString(),
            total: itemsInCart.reduce((accum, currentValue) => accum + currentValue.item.price * currentValue.quantity, 0) 
        }
        
        const db = getFirestore();
        
        const ordersCollection = collection(db, "Orders");
        
        addDoc(ordersCollection, order)
        .then(({id}) => {
            setOrderId(id);
            itemsInCart.forEach(elem => {
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
            <div id="formContainer">
                <h3>Necesitamos los siguientes datos para continuar con la compra:</h3>
                <form id="purchaseForm" onSubmit={sendOrder}>
                        <input type="text" name="name" placeholder="Nombre y Apellido" onChange={handleInputChange}></input>    
                    <div>
                        <input type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={handleInputChange}></input>
                    </div>
                    <button id="confirmPurchaseButton" type="submit" disabled={(!formData.name || !formData.phone || !formData.email) && true}>Confirmar Compra</button>
                </form>
            </div>
        )
    } else {
        return orderId === "loading" ? <Spinner /> : 
            orderId === "error" ? 
                <div id="errorPage">
                    <p>Oops! Lamentamos informarte que ha ocurrido un error. Intentalo de nuevo más tarde.Disculpá las molestias.</p>
                </div> : 
                <div id="purchaseConfirmedPage">
                    <p id="congratsText">FELICITACIONES!</p>
                    <p>Tu compra se realizó exitosamente con el ID:</p> 
                    <p id="orderIdText">{orderId}</p>
                    <p>No lo pierdas! En pocos días te estaremos contactando para coordinar el envío de tu compra y te lo pediremos.</p>
                    <button id="goToMainPageButton" onClick={() => navigate("/", { replace: false })}>Página Principal</button>
                </div>
    }
}