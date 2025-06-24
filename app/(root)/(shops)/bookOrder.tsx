import React from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useCurrentLocation } from "@/hooks/useCurrentLocation";
import { AntDesign } from "@expo/vector-icons";

const BookNow = () => {
  const { total, selected, storeId, storeName } = useLocalSearchParams();
  const services = selected ? JSON.parse(selected as string) : [];

  const { location, loading, errorMsg } = useCurrentLocation();

  const handlePayNow = () => {
    
    console.log("Processing payment...");
    console.log("Amount: ₹", total);
    console.log("Services:", services);
    console.log("Location:", location);
    console.log("Store ID:", storeId);
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-6">
      <Text className="text-2xl font-urbanist text-indigo-700 mb-2">
        Booking for {storeName || "Laundry Store"}
      </Text>

      <View className="mb-6">
        <Text className="text-lg font-urbanist text-gray-800 mb-2">Location</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#6D28D9" />
        ) : errorMsg ? (
          <Text className="text-red-500">{errorMsg}</Text>
        ) : location ? (
          <Text className="font-inter text-gray-600">
            Latitude: {location.latitude.toFixed(4)}, Longitude:{" "}
            {location.longitude.toFixed(4)}
          </Text>
        ) : (
          <Text className="text-gray-400">Location not available</Text>
        )}
      </View>

      <View className="mb-6">
        <Text className="text-lg font-urbanist text-gray-800 mb-2">Order Details</Text>
        <ScrollView className="max-h-60">
          {services.map((item, index) => (
            <View
              key={index}
              className="bg-gray-50 p-4 rounded-xl mb-3 border border-gray-200"
            >
              <Text className="text-base font-urbanist text-indigo-600">{item.name}</Text>
              <Text className="text-sm text-gray-500">{item.description}</Text>
              <Text className="text-base font-urbanist text-gray-700 mt-1">
                {item.quantity} × ₹{item.price} = ₹{item.quantity * item.price}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="absolute bottom-16 left-4 right-4 bg-white border border-gray-200 p-5 shadow-2xl rounded-2xl">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-xl font-urbanist text-indigo-700">Total: ₹{total}</Text>
        </View>

        <TouchableOpacity
          onPress={handlePayNow}
          className="bg-indigo-600 flex-row justify-center items-center py-3 rounded-xl"
        >
          <Text className="text-white font-urbanist text-lg mr-2">Pay Now</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookNow;
