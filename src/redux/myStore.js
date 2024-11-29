import { configureStore } from "@reduxjs/toolkit";
import MyCartReducer from './myCartSlice'
import MyProductReducer from './myProductSlice'

export const Store = configureStore({
    reducer: {
        product: MyProductReducer, 
        cart: MyCartReducer,
    },
});
