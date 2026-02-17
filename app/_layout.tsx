import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
      "Karla-Bold": require("../assets/fonts/Karla-Bold.ttf"),
      "Karla-Italic": require("../assets/fonts/Karla-Italic.ttf"),
      "Karla-BoldItalic": require("../assets/fonts/Karla-BoldItalic.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
