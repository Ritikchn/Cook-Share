import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../../utility/safe-area.component";
import { AuthorInfo } from "../small-components.js/Author.info.component";
import { SameLineContainer } from "../../utility/same-line.componenet";
import { AntDesign } from "@expo/vector-icons";
const RecipieContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  height: 100%;
  flex: 1;
  elevation: 5;
`;

const RecipieImage = styled(Image)`
  width: 100%;
  height: 65%;
  margin: ${(props) => props.theme.space[2]} 0;
`;
const NewscrollView = styled(ScrollView)``;
const RecipeContainerTop = styled(View)`
  flex-grow: 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 9;
  max-height: 400px;
  border-radius: 12px;
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[4]};
`;
const RecipieTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;

  margin: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[4]};
`;
const Heart = styled(AntDesign)`
  margin: ${(props) => props.theme.space[3]};
`;
const IngridentsContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;
const IngridentsContainerSpacer = styled(View)`
  margin: ${(props) => props.theme.space[1]};
`;
const IngridentsTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: ${(props) => props.theme.space[2]} 0;
`;
export const RecipieDetail = ({ route }) => {
  const recipie1 = route.params;
  const recipie = recipie1.restaurant;
  const [isFavourite, setIsFavourite] = useState(false);
  const ingridents = recipie.ingridents;
  return (
    <SafeArea>
      <NewscrollView>
        <RecipieContainer>
          <RecipeContainerTop>
            <RecipieImage
              source={{
                uri: recipie.photos,
              }}
            />

            <RecipieTitle>{recipie.name}</RecipieTitle>
            <SameLineContainer>
              <AuthorInfo
                name={recipie.author.authorName}
                image={recipie.author.authorImage}
              />
              <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                {isFavourite ? (
                  <Heart name="heart" size={24} color="red" />
                ) : (
                  <Heart name="hearto" size={24} color="red" />
                )}
              </TouchableOpacity>
            </SameLineContainer>
          </RecipeContainerTop>
          <IngridentsContainer>
            <IngridentsTitle>Ingridents :</IngridentsTitle>

            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            {ingridents.map((ingredent) => {
              return (
                <IngridentsContainerSpacer>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
          </IngridentsContainer>
        </RecipieContainer>
      </NewscrollView>
    </SafeArea>
  );
};
