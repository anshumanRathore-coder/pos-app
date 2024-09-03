import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#a52a2a",
          tabBarStyle: {
            backgroundColor: "#1B354E",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="customers"
          options={{
            title: "customer",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "product",
            tabBarIcon: ({ color }) => (
              <AntDesign size={28} name="tags" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: "order",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="border-color" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "more",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="reorder" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
