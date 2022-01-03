import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { PostCard } from "../Post-card.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FavouriteBar } from "./favourites-bar.component";
import { FavouritesContext } from "../../services/favourites.context";
import { getData } from "../../api/recipies.api";
import { CustomSearchbar } from "../small-components.js/recipie-searchBar.component";

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
  useEffect(async () => {
    newRecipie = await getData();
    setIsLoading(false);
    dataLength = newRecipie.length;
    setDataArray(newRecipie);
  }, [isFocused]);
  const { favourites } = useContext(FavouritesContext);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

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
        <CustomSearchbar
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => {
            setIsToggled(!isToggled);
          }}
        />
        {isToggled && (
          <FavouriteBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
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
