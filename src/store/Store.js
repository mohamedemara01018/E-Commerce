import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './slices/sidebarSlice'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'
import categoryProductSlice from './slices/categoryProductSlice'
import cartSlice from './slices/cartSlice'
import searchSlice from './slices/searchSlice'
const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        category: categorySlice,
        product: productSlice,
        categoryProduct: categoryProductSlice,
        cart: cartSlice,
        search: searchSlice
    }
})

export default store