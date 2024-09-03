import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import GradientBackground from "@/components/GradientBackground";
import CustomButton from "@/components/CustomButton";

export default function products() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "Products",
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
      <GradientBackground colors={["#1E293B", "#F87171"]}>
        <View className="flex-1 justify-center items-center">
          <View className="flex items-center gap-y-4">
            <AntDesign name="exclamationcircleo" color={"white"} size={50} />
            <Text className="font-bold text-lg text-white">No Products</Text>
            <Text className="text-white px-20">
              Before you start selling on POS. add products in shopify admin
            </Text>
          </View>
          <View className="flex-row items-center justify-center">
            <CustomButton
              title="Go to cart"
              className="w-11/12 mt-5 bg-gray-500"
            />
          </View>
        </View>
      </GradientBackground>
    </>
  );
}
