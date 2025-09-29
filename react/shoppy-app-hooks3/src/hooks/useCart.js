import { useContext } from "react"
import { CartContext } from "../context/CartContext.js";
import { cartItemsAddInfo, cartItemsCheck, getTotalPrice } from "../utils/cart.js";
import { axiosData } from "../utils/dataFetch.js";

export function useCart() {
    const {cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice} = useContext(CartContext);

    const addCart = (cartItem) => {
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

        const findItem = cartList.find((item) => item.cid === cid);
        type === '+' ? 
            setTotalPrice(totalPrice + findItem.price) 
        :   findItem.qty > 1 ? 
                setTotalPrice(totalPrice - findItem.price) 
            :   setTotalPrice(totalPrice);

        type === '+' ? 
            setCartCount(cartCount +1) 
        : cartCount > 1 ?
            setCartCount(cartCount - 1)
            : setCartCount(cartCount);
    }

    const removeCart = (cid, qty, price) => {
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));
        });
        
        setCartCount(cartCount - qty);
        setTotalPrice(totalPrice - (qty * price));
    }

    return{addCart, showCart, updateCart, removeCart}
}