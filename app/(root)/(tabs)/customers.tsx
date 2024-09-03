import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import GradientBackground from "@/components/GradientBackground";

export default function customers() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "Customers",
      headerStyle: {
        backgroundColor: "#1B354E",
      },
      headerTintColor: "white",
      headerRight: () => {
        return (
          <View className="flex-row gap-5 mr-5">
            <AntDesign
              name="plus"
              size={25}
              color={"white"}
              className="rounded-full p-2"
            />
            <Ionicons name="search" size={25} color={"white"} />
          </View>
        );
      },
    });
  }, []);
  return (
    <>
      <GradientBackground colors={["#F59E0B", "#0F172A"]}>
        <View className="flex-1 justify-center items-center">
          <View className="flex items-center gap-y-4">
            <AntDesign name="exclamationcircleo" color={"white"} size={50} />
            <Text className="font-bold text-lg text-white">No customers</Text>
            <Text className="text-white px-10">
              When a customer is added you will see the purchase order and
              trasaction history here.
            </Text>
          </View>
        </View>
      </GradientBackground>
    </>
  );
}
