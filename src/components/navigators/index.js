import React from "react";
import { RecipieNavigator } from "./recipie.naviagtion.comonent";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RecipieNavigator />
    </NavigationContainer>
  );
};
