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
                        const tempTotalPrice = (item.totalPrice + action.payload.totalPrice)
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
            let tempAmount = 0;
            if (state.carts.length > 0) {
                state.carts.map((item) => {
                    tempAmount += item.quantity * item.discountPrice;
                })
                state.totalAmount = tempAmount
                state.totalCount = state.carts.length;
            } else {
                state.totalAmount = 0.00
                state.totalCount = 0;
            }
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
        },

        toggleQuantity: (state, action) => {
            let tempCart = state.carts.map((product) => {
                if (product.id == action.payload.id) {
                    let tempQuantity = product.quantity;
                    let tempPrice = product.discountPrice;
                    if (action.payload.type == 'INC') {
                        if (tempQuantity < product.stock) {
                            tempQuantity += 1;
                        }
                        tempPrice *= tempQuantity;
                        return {
                            ...product, quantity: tempQuantity, totalPrice: tempPrice
                        }
                    }
                    if (action.payload.type == 'DEC') {
                        if (tempQuantity > 1) {
                            tempQuantity -= 1;
                        }
                        tempPrice *= tempQuantity;
                        return {
                            ...product, quantity: tempQuantity, totalPrice: tempPrice
                        }
                    }
                }
                else {
                    return product;
                }
            })
            state.carts = tempCart;
            storeInLocalStorage(state.carts)
        }
    }
})

export default cartSlice.reducer;
export const { addToCard, getCartTotal, clearCart, deleteProduct, toggleQuantity } = cartSlice.actions


export const getCarts = (state) => state.cart.carts
export const getTotalAmount = (state) => state.cart.totalAmount
export const getTotalCount = (state) => state.cart.totalCount