import React from 'react';
import { addCartItem, removeCartItem, showCartItem, updateCartCount, updateCartItem, updateCartPrice } from './cartSlice.js';
import { axiosData } from '../../utils/dataFetch.js';

export const addCart = (cartItem) => async (dispatch) => {
    dispatch(addCartItem({"cartItem": cartItem}));
    dispatch(updateCartCount());
}

export const showCart = () => async (dispatch) => {
    const jsonData = await axiosData('/data/products.json');
    dispatch(showCartItem({"items": jsonData}));
    dispatch(updateCartPrice());
}

export const updateCart = (cid, type) => async (dispatch) => {
    dispatch(updateCartItem({"cid": cid, "type": type}));
    dispatch(updateCartPrice());
    dispatch(updateCartCount());
}

export const removeCart = (cid) => async (dispatch) => {
    dispatch(removeCartItem({"cid": cid}));
    dispatch(updateCartPrice());
    dispatch(updateCartCount());
}