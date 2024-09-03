import { View, Text, Pressable } from "react-native";
import React from "react";
import { homeCardType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeCard(props: homeCardType) {
  // console.log(props);
  return (
    <TouchableOpacity
      className={`h-28 mt-10 flex flex-col items-start p-2 w-32 rounded-xl shadow-2xl border-2 border-white`}
      style={{ backgroundColor: props.bgColor }}
    >
      <Ionicons name={props.icon} size={28} color={"white"} />
      <Text className={`text-white  font-semibold mt-auto`}>{props.title}</Text>
      {props.isPro && <Text className="text-white">Pro</Text>}
    </TouchableOpacity>
  );
}
