import { configureStore } from "@reduxjs/toolkit";
import MyCartReducer from './myCartSlice'
import MyProductReducer from './myProductSlice'
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
let persistConfig ={
    key:"root",
    storage: AsyncStorage,
};

let rootReducer=combineReducers({
    product: MyProductReducer, 
    cart: MyCartReducer,
});

let persistedReducer = persistReducer(persistConfig,rootReducer);

export const Store = configureStore({
    reducer : persistedReducer,
});
