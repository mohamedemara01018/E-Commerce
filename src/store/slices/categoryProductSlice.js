import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASEURL } from "../../utils/URL";

export const fetchCategoryProduct = createAsyncThunk('categoryProductSlice/fetchCategoryProduct', async (category) => {
    const res = await fetch(`${BASEURL}products/category/${category}`);
    const data = await res.json();
    return data.products;
})

const categoryProductSlice = createSlice({
    name: 'categoryProductSlice',
    initialState: {
        categoryProducts: [],
        categoryProductsStatus: STATUS.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryProduct.pending, (state) => {
                state.categoryProductsStatus = STATUS.LOADING;
            })
            .addCase(fetchCategoryProduct.fulfilled, (state, action) => {
                state.categoryProductsStatus = STATUS.SUCCEEDED;
                state.categoryProducts = action.payload;
            })
            .addCase(fetchCategoryProduct.rejected, (state, action) => {
                state.categoryProductsStatus = STATUS.FAILED;
                state.categoryProducts = action.error;
            })
    }
})

export default categoryProductSlice.reducer;


export const getCategoryProduct = (state) => state.categoryProduct.categoryProducts
export const getCategoryProductStatus = (state) => state.categoryProduct.categoryProductsStatus


