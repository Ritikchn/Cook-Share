import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "./src/components/navigators";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/components/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import * as firebase from "firebase";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { LogBox } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDiIGzUWX3mrKeMEBR01JdInJ0YFysGIIc",
  authDomain: "cookandsharereactnative.firebaseapp.com",
  projectId: "cookandsharereactnative",
  storageBucket: "cookandsharereactnative.appspot.com",
  messagingSenderId: "706707040559",
  appId: "1:706707040559:web:0d666ed79d648b937dd9da",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) return null;

  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
        <ExpoStatusBar style={"auto"} />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
