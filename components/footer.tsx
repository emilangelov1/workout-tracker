import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { FontAwesome6 } from "@expo/vector-icons";
export const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BlurView
        style={styles.button}
        intensity={30}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <TouchableOpacity style={styles.opacityWrapper}>
          <FontAwesome6 name="dumbbell" color="white" size={24} />
          <Text style={styles.text}>Log</Text>
        </TouchableOpacity>
      </BlurView>
      <BlurView
        style={styles.button}
        intensity={30}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <TouchableOpacity style={styles.opacityWrapper}>
          <FontAwesome6 name="chart-line" color="white" size={24} />
          <Text style={styles.text}>History</Text>
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    width: "100%",
    height: "10%",
    borderTopWidth: 2,
    borderTopColor: COLORS.BORDER,
    boxShadow: "0 0 40px -0px black",
  },
  opacityWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },
  button: {
    height: "100%",
    width: "50%",
    backgroundColor: COLORS.BORDER,
  },
  text: {
    color: "#fefefe",
    fontFamily: "Karla-Bold",
    fontSize: 16,
  },
});
