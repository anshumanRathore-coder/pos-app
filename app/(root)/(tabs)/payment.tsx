import { View, Text } from "react-native";
import React from "react";
import CustomKeyboard from "@/components/CustomKeyboard";

export default function payment() {
  return (
    <View className="flex-1 h-full bg-black">
      <View>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
          possimus ullam veniam aspernatur, iusto facilis, totam sit doloribus
          id neque vitae. Dolorem ipsum obcaecati quam in, facere doloremque
          assumenda odio molestias minus ducimus doloribus voluptatum vitae,
          aspernatur ex nihil voluptas dolore animi. Culpa, quas!
        </Text>
      </View>
      <View className="mt-auto">
        <CustomKeyboard />
      </View>
    </View>
  );
}
