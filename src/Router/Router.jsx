import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../Components/Cart/Cart';
import { PurchaseForm } from "../Components/PurchaseForm/PurchaseForm";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer text="Lista de productos"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer text="Lista de productos"/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/form" element={<PurchaseForm />}/>
      </Routes>
    )
}