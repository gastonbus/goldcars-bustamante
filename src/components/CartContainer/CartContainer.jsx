import React from "react"
import { Cart } from "../Cart/Cart"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export const CartContainer = () => {

    const { purchaseCart } = useContext(CartContext);

    return (purchaseCart.length > 0) ? <Cart /> : <EmptyCart />
}