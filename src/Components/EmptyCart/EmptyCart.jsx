import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

export const EmptyCart = () => {

    const navigate = useNavigate();

    return (
        <div id="emptyCart">
            <p>No hay ningún producto en el carrito! Por favor, volvé a la página inicial para encontrar lo que buscás.</p>
            <button onClick={() => navigate("/", { replace: false })}>Volver</button>    
        </div>
    )

}