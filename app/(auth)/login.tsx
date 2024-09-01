import { View, Text, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images, otpServices } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomInputField from "@/components/CustomInputField";
import { loginEmployeeType, loginOwnerType } from "@/types/type";
export default function login() {
  const [role, setRole] = useState<string>("");
  const [service, setSrvice] = useState("Email");
  const [loginOwnerForm, setLoginOwnerForm] = useState<loginOwnerType>({
    email: "",
    password: "",
  });
  const [loginEmployeeForm, setLoginEmployeeForm] = useState<loginEmployeeType>(
    {
      cashierCode: "",
      password: "",
    }
  );
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle:
        role === "owner"
          ? "Login as Owner"
          : role === "employee"
          ? "Login as Employee"
          : "Login",
      headerTintColor: "blue",
      headerTitleAlign: "center",
      headerTitleFont: "bold",
      headerTitleStyle: {
        fontWeight: 600,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => (role !== "" ? setRole("") : navigation.goBack())}
          className="w-10 h-10 rounded-xl bg-blue-600 justify-center items-center"
        >
          <Ionicons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
      ),
    });
  }, [role]);

  if (role === "owner") {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-5">
          <CustomInputField
            label="Email"
            placeholder="Enter your email address"
            value={loginOwnerForm.email}
            labelStyle="font-bold ml-3"
            containerStyle="rounded-xl"
            onChangeText={(value) =>
              setLoginOwnerForm({ ...loginOwnerForm, email: value })
            }
          />

          <CustomInputField
            label="Password"
            placeholder="Enter your password"
            value={loginOwnerForm.password}
            containerStyle="rounded-xl"
            labelStyle="font-bold ml-3"
            onChangeText={(value) =>
              setLoginOwnerForm({ ...loginOwnerForm, password: value })
            }
          />
          <Text className="text-xl font-bold mt-5 ml-3 mb-5">Send OTP:</Text>
          <View className="flex flex-row flex-wrap gap-x-10 gap-y-5">
            {otpServices.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row  items-center justify-start gap-x-2 ${
                  item.name === service ? "bg-blue-600" : "bg-gray-300"
                } rounded-xl p-5`}
                onPress={() => setSrvice(item.name)}
              >
                <Image source={item.img} className="w-5 h-5 " />
                <Text
                  className={`${
                    item.name === service ? "text-white" : "text-black"
                  } font-semibold`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <CustomButton
            title="Login"
            bgVariant="primary"
            textVariant="primary"
            className="w-11/12   mt-5"
            onPress={() => router.push("/(root)/home")}
          />
          <Text className="text-blue-700 text-center mt-3 underline">
            Forgot Password
          </Text>
        </View>
      </SafeAreaView>
    );
  } else if (role === "employee") {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-5">
          <CustomInputField
            label="Cashier code"
            placeholder="ABC234343"
            value={loginEmployeeForm.cashierCode}
            labelStyle="font-bold ml-3"
            containerStyle="rounded-xl"
            onChangeText={(value) =>
              setLoginEmployeeForm({ ...loginEmployeeForm, cashierCode: value })
            }
          />

          <CustomInputField
            label="Password"
            placeholder="Enter your password"
            value={loginEmployeeForm.password}
            labelStyle="font-bold ml-3"
            onChangeText={(value) =>
              setLoginEmployeeForm({ ...loginEmployeeForm, password: value })
            }
          />
          <CustomButton
            title="Login"
            bgVariant="primary"
            textVariant="primary"
            className="w-11/12   mt-5"
            onPress={() => router.push("/(root)/home")}
          />
          <View className="mt-10 px-14 bg-blue-200 py-2 rounded-lg">
            <Text className="bg text-center font-semibold">
              Use the cashier code that can be created by the owner to
            </Text>
            <Text className="text-center font-extrabold">
              Manage <Text>{"->"}</Text> Store <Text>{"->"}</Text> Cashier Code
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex gap-y-5 px-5">
          <Text className="font-extrabold text-xl">Welcome to Your POS!</Text>
          <Text className="mt-2 pr-24 font-medium">
            Select login as owner or employee to continue.
          </Text>
          <Image source={images.loginWelcome} className="w-64 h-64" />
          <CustomButton
            title="Login as Owner"
            IconLeft={() => (
              <Ionicons name="person-outline" size={25} color={"white"} />
            )}
            bgVariant="primary"
            textVariant="primary"
            onPress={() => setRole("owner")}
          />
          <Text className="text-center">or</Text>
          <CustomButton
            title="Login as Employee"
            IconLeft={() => (
              <Ionicons name="people-outline" size={25} color={"white"} />
            )}
            bgVariant="primary"
            textVariant="primary"
            className="mt-5"
            onPress={() => setRole("employee")}
          />
          <Text className="text-center">
            Dont't have a account?{" "}
            <Link href="/(auth)/signUp">
              {" "}
              <Text className="text-blue-700 underline">Sign up</Text>
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
