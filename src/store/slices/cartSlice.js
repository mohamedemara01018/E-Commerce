import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const fetchFromLocalStorage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        carts: fetchFromLocalStorage(),
        totalCount: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCard: (state, action) => {
            const isInTheCart = state.carts.find((item) => item.id === action.payload.id);
            if (isInTheCart) {
                let tempCart = state.carts.map((item) => {
                    if (item.id == action.payload.id) {
                        const tempQuantity = item.quantity + action.payload.quantity;
                        const tempTotalPrice = (item.totalPrice + action.payload.totalPrice).toFixed(2);
                        toast.success(`the total quantity became ${tempQuantity}`)
                        return {
                            ...item, quantity: tempQuantity, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts)
                toast.success(`${action.payload.quantity} quantities of this product have been added.`)
            }
        },

        getCartTotal: (state) => {
            let tempAmount = 0
            state.carts.map((item) => {
                tempAmount += item.quantity * item.discountPrice;
            })
            state.totalAmount = tempAmount.toFixed(2)
            state.totalCount = state.carts.length;
        },

        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },

        deleteProduct: (state, action) => {
            let tempCart = state.carts.filter((product) => {
                return product.id !== action.payload
            })
            state.carts = tempCart
            storeInLocalStorage(state.carts);
        }
    }
})

export default cartSlice.reducer;
export const { addToCard, getCartTotal, clearCart, deleteProduct } = cartSlice.actions


export const getCarts = (state) => state.cart.carts
export const getTotalAmount = (state) => state.cart.totalAmount
export const getTotalCount = (state) => state.cart.totalCount