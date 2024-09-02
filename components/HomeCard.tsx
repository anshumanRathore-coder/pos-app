import { View, Text, Pressable } from "react-native";
import React from "react";
import { homeCardType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeCard(props: homeCardType) {
  return (
    <TouchableOpacity
      className={`h-32 mt-10 flex flex-col items-start p-2 w-32 rounded-xl ${props.bgColor}`}
    >
      <Ionicons name={props.icon} size={24} />
      <Text
        className={`${
          props.bgColor === "bg-white" ? "text-black" : "text-white"
        } text-lg font-semibold mt-auto`}
      >
        {props.title}
      </Text>
      {props.isPro && <Text className="text-blue-950">Pro</Text>}
    </TouchableOpacity>
  );
}
