import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './slices/sidebarSlice'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'
const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        category: categorySlice,
        product:productSlice,
    }
})

export default store