import { View, Text, Image } from "react-native";
import React, { useRef, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { icons, images, welcomeOnboarding } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="mt-5 flex h-full  justify-center items-center ">
      <View className="flex flex-row justify-center items-center gap-5">
        <Image source={icons.logo} className="w-10 h-10 rounded-xl" />
        <Text className="text-xl text-blue-500 font-bold">Point of sale</Text>
      </View>
      <Swiper
        ref={swiperRef}
        dot={
          <View className="w-[32px]  h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px]  h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        loop={false}
      >
        {welcomeOnboarding.map((item, index) => (
          <View key={index} className="flex items-center  p-5">
            <Image
              source={item.img}
              className="w-full h-[250px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.heading}
              </Text>
            </View>
            <Text className="text-md  text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title="Login"
        bgVariant="primary"
        textVariant="primary"
        className="w-11/12 mt-10 mb-5"
        onPress={() => router.push("/(auth)/login")}
      />
      <CustomButton
        title="Create new account"
        bgVariant="outline"
        textVariant="outline"
        className="w-11/12  mb-10"
        onPress={() => router.push("/(auth)/signUp")}
      />
    </SafeAreaView>
  );
}
