import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "./customDrawer";
import BottomTabs from "../bottomNavigation";
import RecentOrder from "../../screens/recentOrders";
import SavedAddress from "../../screens/savedAddresses";
import Bkwall from "../../screens/bkWall";
import FaqSupport from "../../screens/faqSupport";
import LegalTerms from "../../screens/legalTerms";
import Nutrition from "../../screens/nutritionInfo";
import Home from "../../screens/homeScreen";

export type DrawerParamList = {
  Home: undefined;
  recentOrder: undefined;
  savedAddress: undefined;
  bkWall: undefined;
  faqSupport: undefined;
  legalTerms: undefined;
  nutrition: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawer {...props} />}
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
  );
};

export default DrawerNavigator;
