

/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, openDt, audiAcc, sale, price, like, icon}) {
    return(
        <div className="best-product-content">
            <p className="best-product-content-title">{title}</p>
            <p>개봉일 : {openDt}</p>
            <p>관객수 : {audiAcc}</p>
            <span className="best-product-content-sale">{sale}</span>
            <span className="best-product-content-price">{price}</span>
            { like ? 
                <span className="best-product-img-like">{icon}</span> : "" }
        </div>
    );
}