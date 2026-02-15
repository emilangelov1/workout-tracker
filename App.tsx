import { StyleSheet, View } from "react-native";
import { Footer } from "./components/footer";
import { COLORS } from "./constants/colors";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import "./global.css";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
      "Karla-Bold": require("./assets/fonts/Karla-Bold.ttf"),
      "Karla-Italic": require("./assets/fonts/Karla-Italic.ttf"),
      "Karla-BoldItalic": require("./assets/fonts/Karla-BoldItalic.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Karla-Regular",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.BACKGROUND,
  },
});
