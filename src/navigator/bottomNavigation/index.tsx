import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/homeScreen";
import Menu from "../../screens/menuScreen";
import Crown from "../../screens/crownScreen";
import Nearstore from "../../screens/nearStoreScreen";
import Icon from "../../assets";
import { vh } from "../../utils/dimensions";

type TabParamList = {
  Home: undefined;
  Menu: undefined;
  "Crown Rewards": undefined;
  "Nearby Stores": undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Georgia",
          fontWeight: "300",
          marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: "#512414",
          height: vh(75),
          paddingHorizontal: 10,
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#F5EADC",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: ImageSourcePropType;

          switch (route.name) {
            case "Home":
              iconName = Icon.home;
              break;
            case "Menu":
              iconName = Icon.menu;
              break;
            case "Crown Rewards":
              iconName = Icon.crown;
              break;
            case "Nearby Stores":
              iconName = Icon.store;
              break;
            default:
              iconName = Icon.menu;
          }

          return (
            <Image
              source={iconName}
              style={
                {
                  width: size,
                  height: size,
                  tintColor: focused ? "orange" : "#F5EADC",
                  marginTop: 10,
                } as ImageStyle
              }
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Crown Rewards" component={Crown} />
      <Tab.Screen name="Nearby Stores" component={Nearstore} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
