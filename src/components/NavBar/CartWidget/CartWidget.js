import { BsCartFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import "./CartWidget.css"; 

export const CartWidget = () => {
    return (
    <IconContext.Provider value={{ size:"2em" }}>
        <div className="cartIconContainer">
            <BsCartFill className='cartIcon'/>    
            <span className='quantity'>0</span>
        </div>
    </IconContext.Provider> 
    )    
}