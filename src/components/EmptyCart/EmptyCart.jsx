import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p>There is no item in your cart! Please, go back to the landing page to add an item.</p>
            <button onClick={() => navigate("/", { replace: false })}>Go back</button>    
        </div>
    )

}