import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from '../Components/CartContainer/CartContainer';
import { PurchaseForm } from "../Components/PurchaseForm/PurchaseForm";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer text="Lista de productos"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer text="Lista de productos"/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartContainer />}/>
            <Route path="/form" element={<PurchaseForm />}/>
      </Routes>
    )
}