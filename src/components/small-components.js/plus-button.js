import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const OutterCover = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = () => {
  return (
    <OutterCover>
      <AntDesign name="plus" size={24} color="white" />
    </OutterCover>
  );
};
