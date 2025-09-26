import React from "react";
import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);

    return (
        <ProductContext.Provider value={{rows, setRows, number, setNumber}}>
            {children}
        </ProductContext.Provider>
    );
}