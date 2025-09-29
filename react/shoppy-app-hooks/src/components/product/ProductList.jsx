import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const {createProduct} = useProduct();
    const {productList} =useContext(ProductContext);
    const [number, setNumber] = useState(3);

    useEffect(() => { 
        //1. createProduct 호출
        createProduct(number); 
    }, [number]);

    return (
        <div>
            {productList && productList.map((rowArray,idx) => 
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