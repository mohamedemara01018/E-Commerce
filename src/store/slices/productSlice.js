import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../../utils/URL";
import { STATUS } from "../../utils/status";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async (limit) => {
    const res = await fetch(`${BASEURL}products?limit=${limit}`);
    const data = await res.json();
    return data.products
})
export const fetchSingleProduct = createAsyncThunk('productSlice/fetchSingleProduct', async (id) => {
    const res = await fetch(`${BASEURL}products/${id}`);
    const data = await res.json();
    return data;
})
const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        productsStatus: STATUS.IDLE,
        singleProduct: {},
        singleProductStatus: STATUS.IDLE,
        productTitle: [],
    },
    reducers: {
        setProductTitle: (state, action) => {
            if (action.payload.length > 0) {
                state.productTitle = state.products.filter((item) => {
                    return item.title.toLowerCase().includes(action.payload.toLowerCase())
                })
            } else {
                state.productTitle = []
            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCEEDED;
                state.products = action.payload;

            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAILED;
                state.products = action.error;
            })
            .addCase(fetchSingleProduct.pending, (state) => {
                state.singleProductStatus = STATUS.LOADING;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.singleProductStatus = STATUS.SUCCEEDED;
                state.singleProduct = action.payload;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.singleProductStatus = STATUS.FAILED;
                state.singleProduct = action.error;
            })
    }
})

export default productSlice.reducer
export const { setProductTitle } = productSlice.actions

// all products
export const getProduct = (state) => state.product.products;
export const getProductStatus = (state) => state.product.productsStatus;
export const getProductTitle = (state) => state.product.productTitle;


// single products
export const getSingleProduct = (state) => state.product.singleProduct;
export const getSingleProductStatus = (state) => state.product.singleProductStatus;