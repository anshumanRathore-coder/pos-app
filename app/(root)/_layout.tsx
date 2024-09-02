import { icons, images } from "@/constants";
import {
  FontAwesome,
  Ionicons,
  FontAwesome6,
  Octicons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: "#00ffff", height: "100%" }}
    >
      <View className="flex items-center ">
        <Image source={images.profile} />
        <Text className="text-xl font-semibold">John Doe</Text>
      </View>
      <DrawerItemList {...props} />
      <View className="flex mt-auto mb-5 items-center ">
        <View className="flex-row items-center">
          <Image source={icons.refresh} className="w-16" />
          <View className="flex ">
            <Text className="text-white font-bold text-lg">Last Login:</Text>
            <Text className="text-sm text-white">Monday 01 September 2024</Text>
            <Text className="text-white text-sm">(12:00AM)</Text>
          </View>
        </View>
        <View className="h-12  px-10 shadow-xl shadow-gray-600 bg-white rounded-xl flex items-center justify-center">
          <Text className="text-blue-600 text-lg font-semibold">
            Upgrade To Premium{" "}
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          headerTintColor: "blue",
          title: "Cashier",
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="cashier"
        options={{
          drawerLabel: "Cashier",
          headerTintColor: "black",
          title: "",
          drawerIcon: ({ color }) => (
            <Ionicons size={28} name="cash" color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="historyTransaction"
        options={{
          drawerLabel: "History Transaction",
          headerTintColor: "black",
          title: "",
          drawerIcon: ({ color }) => (
            <FontAwesome6
              size={28}
              name="money-bill-transfer"
              color={"white"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="report"
        options={{
          drawerLabel: "Report",
          headerTintColor: "black",
          title: "",
          drawerIcon: ({ color }) => (
            <Octicons size={28} name="report" color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="store"
        options={{
          drawerLabel: "Manage Store",
          headerTintColor: "black",

          title: "",
          drawerIcon: ({ color }) => (
            <FontAwesome5 size={28} name="store" color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="account"
        options={{
          drawerLabel: "Account",
          headerTintColor: "black",
          title: "",
          drawerIcon: ({ color }) => (
            <MaterialIcons size={28} name="manage-accounts" color={"white"} />
          ),
        }}
      />
      <Drawer.Screen
        name="support"
        options={{
          drawerLabel: "Support",
          headerTintColor: "black",
          title: "",
          drawerIcon: ({ color }) => (
            <MaterialIcons size={28} name="support-agent" color={"white"} />
          ),
        }}
      />
    </Drawer>
  );
}
