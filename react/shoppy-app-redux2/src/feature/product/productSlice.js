import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    products: [],
    product: {}
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct(state, action) {
            const {productList, products} = action.payload;
            state.productList = productList;
            state.products = products;
        },
        filterProduct(state, action) {
            const {pid} = action.payload;
            // const [filterProduct] = state.productList.flat().filter((item) => item.pid === pid);
            state.product = state.products.find(item => item.pid === pid);
        }
    },
})

// Action creators are generated for each case reducer function
export const { createProduct, filterProduct } = productSlice.actions

export default productSlice.reducer