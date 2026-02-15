import { StyleSheet, View } from "react-native";
import { Footer } from "./components/footer";
import { COLORS } from "./constants/colors";
import * as Font from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import "./global.css";
import { Card } from "./components/card";
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content} />
        <Card exerciseName="BENCH" reps={5} sets={5} weight="170kg" />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Karla-Regular",
    backgroundColor: COLORS.BACKGROUND,
  },
  content: {
    flex: 1,
  },
});
