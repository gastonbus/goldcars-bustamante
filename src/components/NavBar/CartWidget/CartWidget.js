import { BsCartFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import "./CartWidget.css"; 

export const CartWidget = () => {
    const quantity = 0;
    return (
    <IconContext.Provider value={{ size:"2em" }}>
        <div className="cartIconContainer">
            <BsCartFill className='cartIcon'/>    
            <span className='quantity'>{quantity}</span>
        </div>
    </IconContext.Provider> 
    )    
}