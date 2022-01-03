import React from "react";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRecipieInfo } from "./compact-recipie.info.component";
import { Text } from "../typography/text.component";

const FavouriteWrapper = styled(View)`
  padding: 10px;
  padding-bottom: 0;
  margin: 0 ${(props) => props.theme.space[2]};
`;
const MappingBarContainer = styled(View)`
  margin: 0 ${(props) => props.theme.space[2]};
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null;
  return (
    <FavouriteWrapper>
      <Spacer variant="left.large" />
      <Text variant="caption">Favourites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((recipie, index) => {
          const key = recipie.name;

          return (
            <MappingBarContainer key={index}>
              <Spacer variant="left.medium" />
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RecipieDetails", { restaurant: recipie });
                }}
              >
                <CompactRecipieInfo recipie={recipie} />
              </TouchableOpacity>
            </MappingBarContainer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
