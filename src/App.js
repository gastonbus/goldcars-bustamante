import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from "./context/CartContext.jsx";
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer text="Lista de productos"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer text="Lista de productos"/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/Cart" element={<CartContainer />}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
