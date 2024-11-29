import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addProductToMyCart(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.qty += 1; 
            } else {
                state.cart.push({...action.payload, qty: 1}); // Add new product with qty 1
            }
        },
        decrementProductQty(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload);

            if (existingProduct) {
                existingProduct.qty -= 1; // Decrement qty

                if (existingProduct.qty <= 0) {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }
        },
    }
});

export const { addProductToMyCart, decrementProductQty } = MyCartSlice.actions;
export default MyCartSlice.reducer;