import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { PostCard } from "../Post-card.component";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { recipiesData } from "../../mocks/recipie.mocks";
import { getData } from "../../api/recipies.api";
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
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log("needed refresh");
  }, [isFocused]);

  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var newRecipie = [];
  var dataLength;
  useEffect(async () => {
    newRecipie = await getData();
    setIsLoading(false);
    dataLength = newRecipie.length;
    setDataArray(newRecipie);
  }, []);

  return (
    <>
      <SafeArea>
        <RecipieSearchBar />
        {isLoading ? (
          <ActivityIndicator
            animating={true}
            size={50}
            color={Colors.red300}
          ></ActivityIndicator>
        ) : (
          <RecipieList
            data={dataArray}
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
        )}
      </SafeArea>
    </>
  );
};
