import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesContext } from "../../../services/favourites.context";
import { SafeArea } from "../../../utility/safe-area.component";
import { Text } from "../../typography/text.component";
import { RecipieList } from "../../screen/recipie-list.styles";
import { PostCard } from "../../Post-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RecipieList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecipieDetails", {
                  restaurant: item,
                })
              }
            >
              <PostCard recipies={item} />
            </TouchableOpacity>
          </>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
