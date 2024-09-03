import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import GradientBackground from "@/components/GradientBackground";
import CustomButton from "@/components/CustomButton";

export default function order() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "All orders",
      headerStyle: {
        backgroundColor: "#1B354E",
      },
      headerTintColor: "white",
      headerRight: () => {
        return (
          <View className="flex-row gap-5 mr-5">
            <Ionicons name="search" size={25} color={"white"} />
          </View>
        );
      },
    });
  }, []);
  return (
    <>
      <GradientBackground colors={["#1E293B", "#7C3AED"]}>
        <View className="flex-1 justify-center items-center">
          <View className="flex items-center gap-y-4">
            <AntDesign name="exclamationcircleo" color={"white"} size={50} />
            <Text className="font-bold text-lg text-white">No orders</Text>
            <Text className="text-white px-20">No Order for this location</Text>
          </View>
        </View>
      </GradientBackground>
    </>
  );
}
