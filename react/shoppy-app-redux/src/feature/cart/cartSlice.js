import { createSlice } from '@reduxjs/toolkit'
import { cartItemsAddInfo, cartItemsCheck } from '../../utils/cart.js';

const initialState = {
    cartCount: 0,
    cartList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem (state, action) {
            const {cartItem} = action.payload;
            state.cartList = cartItemsCheck(state.cartList, cartItem);
        },
        showCartItem (state, action) {
            const {items} = action.payload;
            state.cartList = cartItemsAddInfo(items, state.cartList)
        },
        updateCartCount (state) {
            state.cartCount = state.cartList.reduce((total, item) => total + item.qty, 0);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCartItem, showCartItem, updateCartCount } = cartSlice.actions //컴포넌트 또는 API 함수에서 dispatch(액션함수)

export default cartSlice.reducer //store에서 호출(import)