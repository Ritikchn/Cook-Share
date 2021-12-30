import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../../utility/safe-area.component";
import { AuthorInfo } from "../small-components.js/Author.info.component";
import { SameLineContainer } from "../../utility/same-line.componenet";
import { Favourites } from "../small-components.js/Favourites.component";
const RecipieContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  height: 100%;
  flex: 1;
  elevation: 5;
`;

const RecipieImage = styled(Image)`
  width: 100%;
  height: 65d%;
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
const Heart = styled(View)`
  margin: 0 ${(props) => props.theme.space[2]};
`;
const IngridentsContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;
const IngridentsContainerSpacer = styled(View)`
  margin: ${(props) => props.theme.space[1]};
`;
const IngridentsTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: ${(props) => props.theme.space[2]} 0;
`;
const StepsContainer = styled(View)`
  margin: ${(props) => props.theme.space[2]} 0;
`;
const SingleStepContainer = styled(View)`
  margin: ${(props) => props.theme.space[2]} 0;
  display: flex;
  flex-direction: row;
`;
const IndexNumber = styled(Text)`
  margin-right: ${(props) => props.theme.space[2]};
  font-size: 17px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
const StepsHeading = styled(Text)`
  margin-top: ${(props) => props.theme.space[3]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;
const ActualStep = styled(Text)`
  margin-right: ${(props) => props.theme.space[1]};
`;
const HeartContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]};
`;
const LikeCountText = styled(View)`
  text-align: center;
  margin: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  justify-content: center;
  align-items: center;
`;
export const RecipieDetail = ({ route }) => {
  const recipie1 = route.params;
  const recipie = recipie1.restaurant;
  const recipieSteps = recipie.steps;
  const [like, setLikes] = useState(recipie.likes);
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
              <SameLineContainer>
                <HeartContainer>
                  <Heart>
                    <Favourites recipie={recipie} />
                  </Heart>
                  <Text>{like}</Text>
                </HeartContainer>
              </SameLineContainer>
            </SameLineContainer>
          </RecipeContainerTop>
          <IngridentsContainer>
            <IngridentsTitle>Ingridents :</IngridentsTitle>

            {ingridents.map((ingredent, index) => {
              return (
                <IngridentsContainerSpacer key={index}>
                  <Text>{ingredent}</Text>
                </IngridentsContainerSpacer>
              );
            })}
            <StepsHeading>Steps :</StepsHeading>
            <StepsContainer>
              {recipieSteps.map((step, index) => {
                return (
                  <SingleStepContainer key={index}>
                    <IndexNumber>{index + 1}.</IndexNumber>
                    <ActualStep>{step}</ActualStep>
                  </SingleStepContainer>
                );
              })}
            </StepsContainer>
          </IngridentsContainer>
        </RecipieContainer>
      </NewscrollView>
    </SafeArea>
  );
};
