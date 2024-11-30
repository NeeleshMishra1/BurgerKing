import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScreen";
import Login from "../../screens/login";
import Otp from "../../screens/otpScreen";
import Detail from "../../screens/detailScreen";
import DrawerNavigator from "../drawerNavigation";
import Menu from "../../screens/menuScreen";
import AddToCart from "../../screens/addToCart";
import Payment from "../../screens/paymentScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="splace"
                    component={Splace}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="otp"
                    component={Otp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="detail"
                    component={Detail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="drawer"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="menu"
                    component={Menu}
                    options={{ headerShown: false }}
                /> */}
                 <Stack.Screen
                     name="addToCart"
                    component={AddToCart}
                    options={{ headerShown: false }}
                 />
                  <Stack.Screen
                     name="payment"
                    component={Payment}
                    options={{ headerShown: false }}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;