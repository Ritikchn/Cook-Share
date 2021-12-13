import React from "react";
import styled from "styled-components";
import { View, FlatList, SafeAreaView, StatusBar } from "react-native";
import { PostCard } from "../Post-card.component";
import { Searchbar } from "react-native-paper";

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
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export const RecipeScreen = () => {
  return (
    <>
      <SafeArea>
        <RecipieSearchBar />

        <RecipieList
          data={DATA}
          renderItem={({ item }) => {
            return <PostCard />;
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
