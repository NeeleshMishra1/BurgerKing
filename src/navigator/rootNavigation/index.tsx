import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScreen";
import Login from "../../screens/login";
import Otp from "../../screens/otpScreen";
import Detail from "../../screens/detailScreen";
import BottomTabs from "../bottomNavigation";
import DrawerNavigator from "../drawerNavigation";
import RecentOrder from "../../screens/recentOrders";
import SavedAddress from "../../screens/savedAddresses";
import Bkwall from "../../screens/bkWall";
import FaqSupport from "../../screens/faqSupport";
import LegalTerms from "../../screens/legalTerms";
import Nutrition from "../../screens/nutritionInfo";
import Home from "../../screens/homeScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
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
                /> */}
                 <Stack.Screen
                    name="drawer"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;