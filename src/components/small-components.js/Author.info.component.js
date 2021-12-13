import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const AuthorImage = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 57px;
  margin: 0 ${(props) => props.theme.space[3]};
`;
const AuthorContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const AuthorInfo = ({ name, image }) => {
  return (
    <AuthorContainer>
      <AuthorImage
        source={{
          uri: image,
        }}
      ></AuthorImage>
      <Text>{name}</Text>
    </AuthorContainer>
  );
};
