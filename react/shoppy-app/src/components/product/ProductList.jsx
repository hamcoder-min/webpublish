import React, { useEffect, useState } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { fetchData, axiosData } from '../../utils/dataFetch.js';

export function ProductList() {
    const [list, setList] = useState([]);
    useEffect(() => {  
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setList(jsonData);
        }
        load();
    }, []);

    //출력 포맷 함수 : 한줄에 상품 3개씩 출력
    
    return (
        <div>
            <div className='product-list'>
                {list && list.map(product => 
                    <ProductAvatar img={product.image} />
                )}
            </div>
        </div>
    );
}