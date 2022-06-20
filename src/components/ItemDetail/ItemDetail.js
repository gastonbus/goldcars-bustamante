import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    return (
        <article id="itemDetailContainer">
            <div>
            <img src={item.image} alt={item.name} id="itemDetailImage"/>

            </div>
            <div>
            <h1 id="itemDetailTitle">{item.name}</h1>
            <p id="itemDetailPrice">Price: U$S {item.price}</p>
            <p id="itemDetailDescription">{item.description}</p>

            </div>
        </article>
    );
};
