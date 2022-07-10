import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Router } from "./Router/Router";
import { CartContextProvider } from "./Context/CartContext.jsx";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
