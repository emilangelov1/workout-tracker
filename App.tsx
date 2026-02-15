import { StyleSheet, View } from "react-native";
import { Footer } from "./components/footer";
import { COLORS } from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.BACKGROUND,
  },
});
