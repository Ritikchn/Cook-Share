import React from "react";
import { View, ImageBackground, Text, Dimensions } from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OutterWrapper = styled(View)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${Math.floor((Dimensions.get("window").height * 30) / 100)}px;
`;
const SameLineContainerspecial = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image = styled(ImageBackground)`
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 ${(props) => props.theme.space[3]};
`;
export const AddScreenImage = () => {
  const imageSource = {
    uri: "https://media.istockphoto.com/vectors/abstract-modern-aesthetic-seamless-patterns-with-trendy-tangled-lines-vector-id1277525003",
  };
  return (
    <OutterWrapper>
      <Image source={imageSource} resizeMode="cover">
        <SameLineContainerspecial>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={54}
            color="black"
          />
          <Title>New Recipie</Title>
        </SameLineContainerspecial>
      </Image>
    </OutterWrapper>
  );
};
