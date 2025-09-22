import React, { useEffect, useState } from 'react';
import { axiosData } from '../../utils/dataFetch.js';

export function QnA() {
    const [qnaData, setQnaData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/productQnA.json");
            setQnaData(jsonData);
        }
        fetch();
    }, [])

    return (
        <div>
            <div>
                <button type='button'>상품문의</button>
            </div>
            <QnAList data={qnaData} />
        </div>
    );
}

export function QnAList({data}) {
    return(
        <ul>
            <li>
                {data.isComplete === true ? "답변완료" : "접수완료"}
                
            </li>
        </ul>
    );
}

