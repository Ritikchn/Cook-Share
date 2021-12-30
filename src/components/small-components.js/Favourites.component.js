import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites.context";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  z-index: 9;
`;

export const Favourites = ({ recipie }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isfavourite = favourites.find((r) => r.placeId === recipie.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isfavourite ? addToFavourites(recipie) : removeFromFavourites(recipie)
      }
    >
      <AntDesign
        name={isfavourite ? "heart" : "hearto"}
        size={24}
        color="red"
      />
    </FavouriteButton>
  );
};
