import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const {products} = useProduct();
    const {rows, number} = useContext(ProductContext);
    // const [rows, setRows] = useState([]);
    // const [number, setNumber] = useState(3);

    useEffect(() => {  
        products();
        // const load = async () => {
        //     const jsonData = await axiosData("/data/products.json");
        //     const rows = groupByRows(jsonData, number);
        //     setRows(rows);
        // }
        // load();
    }, [number]);

    return (
        <div>
            {rows && rows.map((rowArray,idx) => 
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) => 
                        <Link to={`/products/${product.pid}`}>
                            <ProductAvatar img={product.image} key={idx} />
                        </Link>
                    )}
                </div>  
            )}
        </div>
    );
}