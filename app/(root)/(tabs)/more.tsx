import { View, Text } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { moreOptions } from "@/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "@/components/CustomButton";
export default function more() {
  return (
    <>
      <SafeAreaView className="flex-1 bg-black">
        <View className="h-24 mt-4 mx-1 rounded-xl flex-row items-center justify-start pl-4 bg-[#12393E]">
          <AntDesign name="exclamationcircleo" color={"white"} size={20} />
          <View className="flex  ml-3">
            <Text className="text-white font-bold pr-5">
              Your free trial ends on september 5 2024 Extend your trial with
              our membership plane.
            </Text>
            <Text className="text-white underline">Get Started</Text>
          </View>
        </View>
        <Text className="text-xl ml-2 mt-2  font-bold text-white">
          Anshuman Rathore
        </Text>
        <View className="h-20 mt-4 mx-1 rounded-xl flex-row items-center justify-start pl-4 bg-gray-500">
          <AntDesign name="flag" color={"white"} size={20} />
          <View className="flex  ml-3">
            <Text className="text-white font-bold pr-5">Set up POS</Text>
            <Text className="text-red-300 mt-1  underline">
              5 Tasks remaning
            </Text>
          </View>
        </View>
        <View className="mx-3 px-5 mt-5 border-2  border-white rounded-2xl">
          {moreOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center border-b-[1.25px] border-gray-400 justify-between h-16"
            >
              <View className="flex-row">
                <Ionicons name={item.icon} color={"white"} size={25} />
                <Text className="text-white ml-10">{item.name}</Text>
              </View>
              <View>
                <Ionicons
                  name="chevron-forward-outline"
                  color={"white"}
                  size={25}
                />
              </View>
              {/* <View className="border-b"></View> */}
            </TouchableOpacity>
          ))}
        </View>

        <CustomButton
          title="Logout"
          bgVariant="outline"
          textVariant="outline"
          className="w-[40%] py-1 rounded-lg mt-4 ml-3 "
        />
      </SafeAreaView>
    </>
  );
}
