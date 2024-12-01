import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './slices/sidebarSlice'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'
import categoryProductSlice from './slices/categoryProductSlice'
const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        category: categorySlice,
        product: productSlice,
        categoryProduct: categoryProductSlice
    }
})

export default store