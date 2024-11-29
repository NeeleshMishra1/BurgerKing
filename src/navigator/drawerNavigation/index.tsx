import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import CustomDrawer from "./customDrawer";
import BottomTabs from "../bottomNavigation";
import RecentOrder from "../../screens/recentOrders";
import SavedAddress from "../../screens/savedAddresses";
import Bkwall from "../../screens/bkWall";
import FaqSupport from "../../screens/faqSupport";
import LegalTerms from "../../screens/legalTerms";
import Nutrition from "../../screens/nutritionInfo";
import Home from "../../screens/homeScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="recentOrder"
                component={RecentOrder}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="savedAddress"
                component={SavedAddress}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="bkWall"
                component={Bkwall}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="faqSupport"
                component={FaqSupport}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="legalTerms"
                component={LegalTerms}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="nutrition"
                component={Nutrition}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;