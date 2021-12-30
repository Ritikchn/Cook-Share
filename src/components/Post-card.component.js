import React, { useState } from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthorInfo } from "./small-components.js/Author.info.component";
import { SameLineContainer } from "../utility/same-line.componenet";
import { AntDesign } from "@expo/vector-icons";
import { Favourites } from "./small-components.js/Favourites.component";

const PostCardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
  elevation: 5;
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;
const PostCardTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;
const PostCardDescription = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  width: 60%;
`;
const PostCardImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Heart = styled(View)`
  margin: 0 ${(props) => props.theme.space[2]};
`;

const HeartContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} 0;
`;

export const PostCard = ({ recipies }) => {
  const { name, photos, description, author, likes } = recipies;
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <PostCardContainer>
      <PostCardImage
        source={{
          uri: photos,
        }}
      />
      <Card.Content>
        <Info>
          <SameLineContainer>
            <PostCardTitle>{name}</PostCardTitle>
            <AuthorInfo name={author.authorName} image={author.authorImage} />
          </SameLineContainer>
          <SameLineContainer>
            <PostCardDescription>{description}</PostCardDescription>
            <HeartContainer>
              <Heart>
                <Favourites recipie={recipies} />
              </Heart>
              <Text>{likes}</Text>
            </HeartContainer>
          </SameLineContainer>
        </Info>
      </Card.Content>
    </PostCardContainer>
  );
};
