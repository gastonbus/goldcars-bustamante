import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../Components/Cart/Cart';
import { PurchaseForm } from "../Components/PurchaseForm/PurchaseForm";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer text="Gold Cars tiene los autos de colección más importantes de la industria"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer text="Estás viendo únicamente los productos del tipo "/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/form" element={<PurchaseForm />}/>
      </Routes>
    )
}