import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";

export default function History() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.content}>
          <Text style={styles.text}>HISTORYOHMOSFM</Text>
        </View>
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
    width: "100%",
    alignItems: "center",
    gap: 15,
    paddingTop: 25,
    paddingBottom: 100,
    justifyContent: "center",
  },
  text: {
    color: COLORS.TEXT_PRIMARY,
    fontFamily: "Karla-Regular",
    fontSize: 18,
  },
});
