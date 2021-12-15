import React from "react";
import styled from "styled-components";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { PostCard } from "../Post-card.component";
import { Searchbar } from "react-native-paper";
import { recipiesData } from "../../mocks/recipie.mocks";
const RecipieSearchBar = styled(Searchbar)`
  margin: ${(props) => props.theme.sizes[1]};
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;

  margin-top: ${StatusBar.currentHeight}px;
`;

const RecipieList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RecipeScreen = ({ navigation }) => {
  return (
    <>
      <SafeArea>
        <RecipieSearchBar />

        <RecipieList
          data={recipiesData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RecipieDetails", { restaurant: item })
                }
              >
                <PostCard recipies={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
