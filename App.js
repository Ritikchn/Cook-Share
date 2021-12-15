import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "./src/utility/safe-area.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/components/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RecipieNavigator } from "./src/components/navigators/recipie.naviagtion.comonent";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Recipies: "md-restaurant",
  Add: "md-add-circle-outline",
  Settings: "md-person-outline",
};
const SettingsScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};
const AddScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Add!</Text>
      </View>
    </SafeArea>
  );
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

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Recipies" component={RecipieNavigator} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latodLoaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <MyTabs />
      <ExpoStatusBar style={"auto"} />
    </ThemeProvider>
  );
}
