import React, { useEffect } from "react";
import RootNavigation from "./src/navigator/rootNavigation";
import { Product } from "./src/api/menu";
import { useDispatch } from "react-redux";
import { addMyProduct } from "./src/redux/myProductSlice";
import { addProductToMyCart } from "./src/redux/myCartSlice";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        Product.menu.forEach((item) => {
            dispatch(addMyProduct(item));
        });
        Product.valueMeal.forEach((item) => {
            dispatch(addMyProduct(item));
        });
        Product.whoppers.forEach((item) => {
            dispatch(addMyProduct(item));
        });
        Product.snacks.forEach((item) => {
            dispatch(addMyProduct(item));
        });
        Product.Friends.forEach((item) => {
            dispatch(addMyProduct(item));
        });
        // Product.Desserts.forEach((item) => {
        //     dispatch(addMyProduct(item));
        // });
        // Product["Crazy app"].forEach((item) => {
        //     dispatch(addMyProduct(item));
        // });
        // Product.Burger.forEach((item) => {
        //     dispatch(addMyProduct(item));
        // });
        // Product.Bravages.forEach((item) => {
        //     dispatch(addMyProduct(item));
        // });

    }, [dispatch]);

    return <RootNavigation />;
};

export default Main;
