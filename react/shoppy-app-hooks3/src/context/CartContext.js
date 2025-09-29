import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0); //1. 장바구니 수량 관리
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <CartContext.Provider value={{cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
}