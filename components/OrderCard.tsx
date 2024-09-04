import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export const OrderCard = ({ order }) => (
  <View className="bg-white p-4 m-2 rounded-lg shadow-md flex-row items-center">
    <Image source={order.image_url} className="w-16 h-16 rounded-md mr-4" />
    <View>
      <Text className="text-lg font-semibold text-gray-900">
        {order.order_name}
      </Text>
      <Text className="text-sm text-gray-600">
        <Text className="font-semibold">Order ID</Text>: {order.order_id}
      </Text>
      <View className="mt-2">
        <Text className="text-base text-gray-800">
          <Text className="font-semibold">Customer</Text>: {order.customer_name}
        </Text>
        <Text className="text-sm text-gray-600">
          <Text className="font-semibold">Customer ID</Text>:{" "}
          {order.customer_ID}
        </Text>
        <Text className="text-sm text-gray-600">
          <Text className="font-semibold">Address</Text>:{" "}
          {order.customer_address}
        </Text>
        <Text className="text-sm text-gray-600">
          <Text className="font-semibold">Date</Text>: {order.order_date}
        </Text>
      </View>
    </View>
  </View>
);
