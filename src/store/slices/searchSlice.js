import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from '../../utils/status';
import { BASEURL } from "../../utils/URL";


export const fetchSearchProduct = createAsyncThunk('searchSlice/fetchSearchProduct', async (searchTerm) => {
    const response = await fetch(`${BASEURL}products/search?q=${searchTerm}`);
    const data = await response.json();
    console.log(data)
    return data.products;
})

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchProduct: [],
        searchProductStatus: STATUS.IDLE
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchProduct.pending, (state) => {
                state.searchProductStatus = STATUS.LOADING;

            })
            .addCase(fetchSearchProduct.fulfilled, (state, action) => {
                state.searchProductStatus = STATUS.SUCCEEDED;
                state.searchProduct = action.payload;
                // console.log(action.payload)
            })
            .addCase(fetchSearchProduct.rejected, (state, action) => {
                state.searchProductStatus = STATUS.FAILED;
                state.searchProduct = action.error;
            })
    }
})

export default searchSlice.reducer;

export const getSearchProduct = (state) => state.search.searchProduct
export const getSearchProductStatus = (state) => state.search.searchProductStatus