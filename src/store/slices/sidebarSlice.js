import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isSidebarOn: false
}

const sidebarSlice = createSlice({
    name: 'sidebarSlice',
    initialState,
    reducers: {
        setSidebarOn: (state) => {
            state.isSidebarOn = true
        },
        setSidebarOff: (state) => {
            state.isSidebarOn = false
        }
    }
})

export default sidebarSlice.reducer
export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions
export const getSidebarStatus = (state) => state.sidebar.isSidebarOn;