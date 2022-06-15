import { Item } from "./Item/Item";

export const ItemList = ({products}) => {
    return (
        products.map(p => 
            <Item 
            key={p.id} 
            image={p.image} 
            name={p.name} 
            price={p.price} 
            stock={p.stock} />
        )     
    )
}