import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScreen";
import Login from "../../screens/login";
import Otp from "../../screens/otpScreen";
import Detail from "../../screens/detailScreen";
import BottomTabs from "../bottomNavigation";

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
                    name="bottom"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;