import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding: 10px 0 0 0;
  margin-top: ${StatusBar.currentHeight}px;
`;
