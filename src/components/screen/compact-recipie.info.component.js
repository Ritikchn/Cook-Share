import React from "react";
import { Image, View, Platform } from "react-native";
import styled from "styled-components";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
export const CompactRecipieInfo = ({ recipie, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: recipie.photos }}></Image>
      <Text center variant="caption" numberOfLines={3}>
        {recipie.name}
      </Text>
    </Item>
  );
};
