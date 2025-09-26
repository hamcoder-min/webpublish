import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData, groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {rows, setRows, number, setNumber} = useContext(ProductContext);

    const products = () => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }

    return {products}
}