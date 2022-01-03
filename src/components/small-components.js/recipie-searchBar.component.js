import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const RecipieSearchBar = styled(Searchbar)`
  margin: ${(props) => props.theme.sizes[1]};
`;
export const CustomSearchbar = ({
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  return (
    <RecipieSearchBar
      icon={isFavouritesToggled ? "heart" : "heart-outline"}
      onIconPress={onFavouritesToggle}
    />
  );
};
