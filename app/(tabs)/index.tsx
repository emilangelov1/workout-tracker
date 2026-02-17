import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/card";
import { COLORS } from "../../constants/colors";

export default function Log() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.content}>
          <Card exerciseName="BENCH" reps={5} sets={5} weight="170kg" />
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
    justifyContent: "flex-start",
  },
});
