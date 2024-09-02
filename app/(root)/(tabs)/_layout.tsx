import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function Layout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favourite"
          options={{
            title: "favourite",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="star" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="payment"
          options={{
            title: "Payment",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="credit-card" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
