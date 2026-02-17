import { Tabs } from "expo-router";
import { Footer } from "../../components/footer";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <Footer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Log",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
        }}
      />
    </Tabs>
  );
}
