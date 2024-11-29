import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './slices/sidebarSlice'
import categorySlice from './slices/categorySlice'
const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        category: categorySlice,
    }
})

export default store