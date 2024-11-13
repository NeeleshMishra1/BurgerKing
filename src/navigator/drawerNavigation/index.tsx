import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import CustomDrawer from "./customDrawer";
import BottomTabs from "../bottomNavigation";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />} 
        >
            <Drawer.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;