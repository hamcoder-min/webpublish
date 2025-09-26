import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { axiosData } from "../utils/dataFetch.js";
import { cartItemsAddInfo, cartItemsCheck, getTotalPrice } from "../utils/cart.js";

export function useCart() {
    const {cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice} = useContext(CartContext);

    const addCart = (cartItem) => { //<--  ProductDetail 쇼핑백 추가 이벤트 처리
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount +1);
    }

    const showCart = () => {
        const fetch = async () => {
            const jsonData = await axiosData('/data/products.json');
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        fetch();
    }

    const updateCart = (cid, type) => {
        //카트 수량 변경
        setCartList((cartList) => 
            cartList.map((item) => 
                item.cid === cid ?
                    type === '+'? 
                        {...item, qty: item.qty+1} 
                    :   item.qty > 1 ?
                            {...item, qty: item.qty-1} 
                        :   item
                :   item
            )
        );

        //수량 변경에 따른 전체 상품 가격 변경
        const findItem = cartList.find((item) => item.cid === cid);
        type === '+' ? 
            setTotalPrice(totalPrice + findItem.price) 
        :   findItem.qty > 1 ? 
                setTotalPrice(totalPrice - findItem.price) 
            :   setTotalPrice(totalPrice);

        //cartCount 수량 변경 : Header
        type === '+' ? 
            setCartCount(cartCount +1) 
        : cartCount > 1 ?
            setCartCount(cartCount - 1)
            : setCartCount(cartCount);
    }

    const removeCart = (cid) => {
        const findItem = cartList.find(item => item.cid === cid);
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));
        });
        
        setCartCount(cartCount - findItem.qty);
        setTotalPrice(totalPrice - (findItem.qty * findItem.price));
    }

    return {addCart, showCart, updateCart, removeCart}
}