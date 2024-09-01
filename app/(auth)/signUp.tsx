import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";
import { signupFormType } from "@/types/type";

export default function signUp() {
  const [formSignUp, setFormSignUp] = useState<signupFormType>({
    email: "",
    phone: "",
    password: "",
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: "Sign up",
      headerTintColor: "blue",
      headerTitleAlign: "center",
      headerTitleFont: "bold",
      headerTitleStyle: {
        fontWeight: 600,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-xl bg-blue-600 justify-center items-center"
        >
          <Ionicons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5">
        <CustomInputField
          label="Email"
          placeholder="Enter your email"
          value={formSignUp.email}
          labelStyle="font-bold ml-3"
          containerStyle="rounded-xl"
          onChangeText={(value) =>
            setFormSignUp({ ...formSignUp, email: value })
          }
        />

        <CustomInputField
          label="Phone number"
          placeholder="Enter your phone number"
          value={formSignUp.phone}
          labelStyle="font-bold ml-3"
          onChangeText={(value) =>
            setFormSignUp({ ...formSignUp, phone: value })
          }
        />
        <CustomInputField
          label="Password"
          placeholder="Enter your password"
          value={formSignUp.password}
          labelStyle="font-bold ml-3"
          onChangeText={(value) =>
            setFormSignUp({ ...formSignUp, password: value })
          }
        />
        <View className="flex-row justify-center">
          <CustomButton
            title="Login"
            bgVariant="primary"
            textVariant="primary"
            className="w-11/12   mt-5"
            onPress={() => router.push("/(root)/home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
