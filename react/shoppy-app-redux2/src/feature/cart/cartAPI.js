import React from 'react';
import { addCartItem, removeCartItem, showCartItem, updateCartCount, updateCartItem, updateTotalPrice } from './cartSlice.js';
import { axiosData } from '../../utils/dataFetch.js';

export const addCart = (pid, size) => async (dispatch) => {
    dispatch(addCartItem({"cartItem": {"pid": pid, "size": size, "qty": 1}}));
    dispatch(updateCartCount());
}

export const showCart = () => async (dispatch) => {
    const jsonData = await axiosData('/data/products.json');
    dispatch(showCartItem({"items": jsonData}));
    dispatch(updateTotalPrice());
}

export const updateCart = (cid, type) => async (dispatch) => {
    dispatch(updateCartItem({"cid": cid, "type": type}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}

export const removeCart = (cid) => async (dispatch) => {
    dispatch(removeCartItem({"cid": cid}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}