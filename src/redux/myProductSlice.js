import { createSlice } from "@reduxjs/toolkit";

const MyproductSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        addMyProduct(state, action) {
            state.products.push(action.payload);
        },
        increseQty(state, action) {

            let myindex = -1;
            state.products.map((item, index) => { 
                if (item.id === action.payload) {
                    myindex = index;
                }
            });

            if (myindex == -1) {
                state.products[myindex].qty = state.products[myindex].qty  + 1; 
            }
        },
        decreaseQty(state, action) {

            let myindex = -1;
            state.products.map((item, index) => { 
                if (item.id === action.payload) {
                    myindex = index;
                }
            });

            if (myindex == -1) {
                state.products[myindex].qty = state.products[myindex].qty  - 1; 
            }
        }

    }
})
export const { addMyProduct, increseQty,decreaseQty } = MyproductSlice.actions;
export default MyproductSlice.reducer;