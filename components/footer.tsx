import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";
import { BlurView } from "expo-blur";
import { FontAwesome6 } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export const Footer = ({ state, navigation }: BottomTabBarProps) => {
  const tabs = [
    { id: 0, name: "Log", icon: "dumbbell", route: "index" },
    { id: 1, name: "History", icon: "chart-line", route: "history" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = state.index === index;
        return (
          <BlurView
            style={styles.button}
            // intensity={90}
            tint="dark"
            // experimentalBlurMethod="dimezisBlurView"
            key={tab.id}
          >
            <TouchableOpacity
              style={{
                borderTopColor: `${isActive ? COLORS.PRIMARY : "transparent"}`,
                borderTopWidth: 3,
                ...styles.opacityWrapper,
              }}
              onPress={() => {
                navigation.navigate(tab.route);
              }}
            >
              <FontAwesome6
                name={tab.icon}
                color={isActive ? COLORS.PRIMARY : COLORS.TEXT_MUTED}
                size={24}
              />
              <Text
                style={{
                  ...styles.text,
                  color: isActive ? COLORS.TEXT_PRIMARY : COLORS.TEXT_MUTED,
                }}
              >
                {tab.name}
              </Text>
            </TouchableOpacity>
          </BlurView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 80,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
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
    backgroundColor: COLORS.SURFACE,
  },
  text: {
    color: COLORS.TEXT_PRIMARY,
    fontFamily: "Karla-Bold",
    fontSize: 14,
  },
});
