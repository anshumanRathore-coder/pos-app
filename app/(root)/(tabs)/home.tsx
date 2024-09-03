import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { homePage } from "@/constants";
import HomeCard from "@/components/HomeCard";
import { LinearGradient } from "expo-linear-gradient";
import GradientBackground from "@/components/GradientBackground";
import CustomButton from "@/components/CustomButton";
export default function home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "My Store",
      headerStyle: {
        backgroundColor: "#1B354E",
      },
      headerTintColor: "white",
      headerRight: () => {
        return (
          <View className="flex-row gap-5 mr-5">
            <MaterialIcons
              name="qr-code-scanner"
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
      <GradientBackground colors={["#7C3AED", "#334155", "#0F172A"]}>
        <View className="h-14 mt-4 mx-3 rounded-xl flex-row items-center justify-start pl-4 bg-[#12393E]">
          <AntDesign name="exclamationcircleo" color={"white"} size={20} />
          <View className="flex  ml-5">
            <Text className="text-white font-bold">Set up to sell</Text>
            <Text className="text-white underline">Get Started</Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap justify-around">
          {homePage.map((item, index) => (
            <HomeCard key={index} {...item} />
          ))}
        </View>
        <View className="mt-10 w-full h-[1.5px] bg-gray-600"></View>
        <View className="flex-row items-center justify-center">
          <CustomButton
            title="Go to cart"
            className="w-11/12 mt-5 bg-gray-600"
          />
        </View>
      </GradientBackground>
    </>
  );
}
