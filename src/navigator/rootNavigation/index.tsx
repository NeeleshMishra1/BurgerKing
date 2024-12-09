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
import Terms from "../../screens/legalTerms/terms";
import Policy from "../../screens/legalTerms/policy";
import Promotional from "../../screens/legalTerms/promotional";
import Notification from "../../screens/notification";

export type RootStackParamList = {
  splace: undefined;
  login: undefined;
  otp: undefined;
  detail: undefined;
  drawer: undefined;
  menu: undefined;
  addToCart: undefined;
  payment: undefined;
  terms: undefined;
  policy: undefined;
  promotional: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
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
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="terms"
          component={Terms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="policy"
          component={Policy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="promotional"
          component={Promotional}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="notification"
          component={Notification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
