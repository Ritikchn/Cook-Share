import React from "react";

import { RecipieNavigator } from "./recipie.naviagtion.comonent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AddScreen } from "../screen/add-input.component";
import { SettingsScreen } from "../settings/screens/settings.screen";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Recipies: "md-restaurant",
  Add: "md-add-circle-outline",
  Settings: "md-person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#F90716",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Recipies" component={RecipieNavigator} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
