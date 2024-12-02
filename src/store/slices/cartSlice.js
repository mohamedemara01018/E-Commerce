import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storeInLocalStorage = (data) => {
    localStorage.setItem('card', JSON.stringify(data))
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        carts: [],
        totalCount: 0,
        totalAmount: 0,
        isCardMessageOn: false
    },
    reducers: {
        addToCard: (state, action) => {
            const isInTheCart = state.carts.find((item) => item.id === action.payload.id);
            if (isInTheCart) {
                console.log(isInTheCart)
                let tempCart = state.carts.map((item) => {
                    if (item.id == action.payload.id) {
                        const tempQuantity = item.quantity + action.payload.quantity;
                        const tempTotalPrice = item.totalPrice + action.payload.totalPrice;
                        toast.success(`The quantity of this product was increased by ${item.quantity} and the total quantity became ${tempQuantity}`)

                        return {
                            ...item, quantity: tempQuantity, totalPrice: tempTotalPrice
                        }
                    } else {
                        toast.success(`${item.quantity} products have been added to the cart for this product`)
                        return item
                    }
                })
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts)
            }
        }
    }
})

export default cartSlice.reducer;
export const { addToCard } = cartSlice.actions


export const getCarts = (state) => state.cart.carts