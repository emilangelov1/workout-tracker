import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";
import { BlurView } from "expo-blur";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
export const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { id: 0, name: "Log", icon: "dumbbell" },
    { id: 1, name: "History", icon: "chart-line" },
  ];
  return (
    <View style={styles.container}>
      {tabs.map((e) => {
        return (
          <BlurView
            style={styles.button}
            // intensity={90}
            tint="dark"
            // experimentalBlurMethod="dimezisBlurView"
            key={e.id}
          >
            <TouchableOpacity
              // style={styles.opacityWrapper}
              style={{
                borderTopColor: `${activeTab === e.id ? COLORS.ACCENT : COLORS.BACKGROUND}`,
                borderTopWidth: 2,
                ...styles.opacityWrapper,
              }}
              onPress={() => {
                setActiveTab(e.id);
              }}
            >
              <FontAwesome6 name={e.icon} color="white" size={24} />
              <Text style={styles.text}>{e.name}</Text>
            </TouchableOpacity>
          </BlurView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    borderTopWidth: 2,
    borderTopColor: COLORS.BACKGROUND,
    boxShadow: `0 -20px 40px -0px ${COLORS.BACKGROUND}`,
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
    backgroundColor: COLORS.BACKGROUND,
  },
  text: {
    color: "#fefefe",
    fontFamily: "Karla-Bold",
    fontSize: 16,
  },
});
