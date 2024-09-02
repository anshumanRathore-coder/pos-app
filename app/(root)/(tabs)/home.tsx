import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { homePage } from "@/constants";
import HomeCard from "@/components/HomeCard";
export default function home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "",
      headerLeft: () => (
        <View className="w-full flex-row border-t-[0.2px] shadow-2xl h-7 ">
          <View className="flex-row h-10 border-r-[0.2px] w-[40%] items-center justify-center">
            <Text>All Products </Text>
          </View>
          <View className="flex-row h-10 border-r-[0.2px] w-[20%] items-center justify-center">
            <Ionicons name="search" size={20} />
          </View>
          <View className="flex-row h-10 border-r-[0.2px] w-[20%] items-center justify-center">
            <FontAwesome name="list-alt" size={20} />
          </View>
          <View className="flex-row h-10 border-r-[0.2px] w-[20%] items-center justify-center">
            <Feather name="list" size={20} />
          </View>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <View className="flex flex-row flex-wrap justify-around h-full bg-black">
        {homePage.map((item, index) => (
          <HomeCard key={index} {...item} />
        ))}
      </View>
    </>
  );
}
