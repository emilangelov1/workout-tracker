import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { BlurView } from "expo-blur";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.button}
        intensity={30}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <TouchableOpacity style={styles.opacityWrapper}>
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
          <Text style={styles.text}>History</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 5,
    width: "100%",
    height: "10%",
    borderTopWidth: 2,
    borderTopColor: COLORS.BORDER,
  },
  opacityWrapper {
    width: "100%",
    height: "100%",
  },
  button: {
    height: "100%",
    width: "50%",
    backgroundColor: COLORS.BORDER,
  },
  text: {
    color: "#fefefe",
  },
});
