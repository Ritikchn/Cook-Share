import React, { useContext } from "react";
import { SafeArea } from "../../../utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View } from "react-native";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../typography/text.component";
import { Spacer } from "../../spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer variant="top.large" />
        <Text variant="caption">{user.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black " icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black " icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
