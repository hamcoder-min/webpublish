import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData, groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {productList, setProductList, product, setProduct, imgList, setImgList} = useContext(ProductContext);

    const createProduct = (number) => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setProductList(rows);
        }
        load();
    }

    const filterProduct = (pid) => {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            // createProduct();
            const [filterProduct] = jsonData.filter((item) => item.pid === pid);
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);
        }
        filterData();
    }

    return {createProduct, filterProduct};
}