import React from "react";
import { RecipieDetail } from "../screen/recipie-details.component";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RecipeScreen } from "../screen/recipie.screen";

const RecipieStack = createStackNavigator();

export const RecipieNavigator = () => {
  return (
    <RecipieStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerMode: false,
      }}
    >
      <RecipieStack.Screen name="Recipie" component={RecipeScreen} />
      <RecipieStack.Screen name="RecipieDetails" component={RecipieDetail} />
    </RecipieStack.Navigator>
  );
};
