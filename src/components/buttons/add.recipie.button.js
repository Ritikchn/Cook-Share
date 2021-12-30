import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const OutterWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-radius: 20px;
  width: 170px;
  height: 45px;
`;
const AddRecipieText = styled(Text)`
  color: white;
  margin: 0 ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const AddRecipieButtom = () => {
  return (
    <OutterWrapper>
      <AntDesign name="plus" size={24} color="white" />
      <AddRecipieText>Add Recipie</AddRecipieText>
    </OutterWrapper>
  );
};
