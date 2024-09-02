import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

export default function index() {
  return (
    <SafeAreaView>
      <Redirect href="/(root)/home" />
    </SafeAreaView>
  );
}
