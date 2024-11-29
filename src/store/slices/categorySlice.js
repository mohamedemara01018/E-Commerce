import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASEURL } from "../../utils/URL";
export const fetchCategories = createAsyncThunk('categorySlice/fetchCategories', async () => {
    try {
        let res = await fetch(`${BASEURL}products/categories`);
        let data = await res.json();
        return data
    } catch (error) {
        throw new Error(error)
    }
})
const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        categories: [],
        categoryStatus: STATUS.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.categoryStatus = STATUS.LOADING;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoryStatus = STATUS.SUCCEEDED;
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.categoryStatus = STATUS.FAILED;
            })
    }
})


export default categorySlice.reducer;
export const getCategoryState = (state) => state.category