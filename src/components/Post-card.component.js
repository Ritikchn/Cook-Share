import React, { useState } from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
import { AuthorInfo } from "./small-components.js/Author.info.component";
import { AntDesign } from "@expo/vector-icons";
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
`;
const PostCardImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const SameLineContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeartContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} 0;
`;

const Heart = styled(AntDesign)`
  margin: 0 ${(props) => props.theme.space[2]};
`;

export const PostCard = ({ recipies = {} }) => {
  const {
    name = "Some Recipe",
    photos = [
      "https://www.thespruceeats.com/thmb/qV3rWToK2GI8HQE8Djo1rYzuPfA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
    ],
    description = " No Description",
    author = {
      authorName: "Author",
      authorImage:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    likes = 4,
  } = recipies;
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <PostCardContainer>
      <PostCardImage
        source={{
          uri: photos[0],
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
              <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                {isFavourite ? (
                  <Heart name="heart" size={24} color="red" />
                ) : (
                  <Heart name="hearto" size={24} color="red" />
                )}
              </TouchableOpacity>
              <Text>{likes}</Text>
            </HeartContainer>
          </SameLineContainer>
        </Info>
      </Card.Content>
    </PostCardContainer>
  );
};
