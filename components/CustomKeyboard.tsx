import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const Button = styled(TouchableOpacity);

const CustomKeyboard = () => {
  const handlePress = (value: string) => {
    console.log(value);
    // Handle the button press, update input, etc.
  };

  return (
    <View className="flex flex-col items-center justify-center h-full">
      <View className="flex flex-row">
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("1")}
        >
          <Text className="text-center text-lg">1</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("2")}
        >
          <Text className="text-center text-lg">2</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("3")}
        >
          <Text className="text-center text-lg">3</Text>
        </Button>
      </View>

      <View className="flex flex-row">
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("4")}
        >
          <Text className="text-center text-lg">4</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("5")}
        >
          <Text className="text-center text-lg">5</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("6")}
        >
          <Text className="text-center text-lg">6</Text>
        </Button>
        <Button
          className="flex-1 bg-red-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("X")}
        >
          <Text className="text-center text-lg">X</Text>
        </Button>
      </View>

      <View className="flex flex-row">
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("7")}
        >
          <Text className="text-center text-lg">7</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("8")}
        >
          <Text className="text-center text-lg">8</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("9")}
        >
          <Text className="text-center text-lg">9</Text>
        </Button>
        <Button
          className="flex-1 bg-green-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("Enter")}
        >
          <Text className="text-center text-lg">Enter</Text>
        </Button>
      </View>

      <View className="flex flex-row">
        <Button
          className="flex-1 bg-blue-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("C")}
        >
          <Text className="text-center text-lg">C</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("0")}
        >
          <Text className="text-center text-lg">0</Text>
        </Button>
        <Button
          className="flex-1 bg-gray-300 p-4 m-1 rounded-lg"
          onPress={() => handlePress("000")}
        >
          <Text className="text-center text-lg">000</Text>
        </Button>
      </View>
    </View>
  );
};

export default CustomKeyboard;
