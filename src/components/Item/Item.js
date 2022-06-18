import "./Item.css";

export const Item = ({name, price, stock, image}) => {
    return (
        <div id="itemContainer">
            <img src={image} alt={name} id="productImage"></img>
            <p id="itemName">{name}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    )
}