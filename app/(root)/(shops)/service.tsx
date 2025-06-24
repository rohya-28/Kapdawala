import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router"; // 👈 Add router
import { availableServices } from "@/constants";

const ServiceSelection = () => {
  const router = useRouter(); // 👈 Hook for navigation

  const { storeId, storeName, offer, pickup } = useLocalSearchParams();

  

  const [selectedServices, setSelectedServices] = useState(
    availableServices.map((service) => ({ ...service, quantity: 0 }))
  );

  const handleIncrement = (id) => {
    setSelectedServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, quantity: service.quantity + 1 } : service
      )
    );
  };

  const handleDecrement = (id) => {
    setSelectedServices((prev) =>
      prev.map((service) =>
        service.id === id && service.quantity > 0
          ? { ...service, quantity: service.quantity - 1 }
          : service
      )
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce(
      (total, service) => total + service.quantity * service.price,
      0
    );
  };

  const totalItems = selectedServices.reduce(
    (total, service) => total + service.quantity,
    0
  );

  const handleProceed = () => {
    const selected = selectedServices.filter((s) => s.quantity > 0);
    router.push({
      pathname: "/bookOrder",
      params: {
        total: calculateTotal().toString(),
        selected: JSON.stringify(selected),
        storeId,
        storeName,
        offer,
        pickup,
      },
    });
  };
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6  ">
      <Text className="text-3xl font-urbanist text-gray-900 leading-tight">
    {storeName || "Choose Your Services"}
  </Text>
        <Text className="text-base font-inter text-gray-600 mt-2">
          Select the perfect care for your garments.
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {selectedServices.map((service) => (
          <View
            key={service.id}
            className="flex-row items-center bg-white rounded-2xl shadow-xl mb-5 p-5 border border-gray-100"
          >
            <View className="flex-1 mr-4">
              <Text className="text-lg font-urbanist text-indigo-700 mb-1">{service.name}</Text>
              <Text className="text-sm text-gray-500 font-inter mb-2">{service.description}</Text>
              <Text className="text-base font-urbanist text-green-600">
                ₹{service.price}
                <Text className="text-gray-400 font-urbanist text-sm"> / item</Text>
              </Text>
            </View>

            <View className="flex-row items-center space-x-2">
              <TouchableOpacity
                onPress={() => handleDecrement(service.id)}
                className={`p-2 rounded-full ${
                  service.quantity > 0 ? "bg-red-100" : "bg-gray-100"
                }`}
                disabled={service.quantity === 0}
              >
                <AntDesign
                  name="minus"
                  size={20}
                  color={service.quantity > 0 ? "#EF4444" : "#A1A1AA"}
                />
              </TouchableOpacity>

              <Text className="text-xl font-urbanist text-gray-800 w-8 text-center">
                {service.quantity}
              </Text>

              <TouchableOpacity
                onPress={() => handleIncrement(service.id)}
                className="bg-green-100 p-2 rounded-full"
              >
                <AntDesign name="plus" size={20} color="#22C55E" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View className="h-36" />
      </ScrollView>

      {totalItems > 0 && (
        <View className="absolute bottom-32 left-4 right-4 bg-white border border-gray-200 p-5 shadow-2xl rounded-2xl">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-base font-urbanist text-gray-600">
                {totalItems} Item{totalItems > 1 ? "s" : ""} selected
              </Text>
              <Text className="text-3xl font-urbanist text-indigo-800 mt-1">
                ₹{calculateTotal()}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-indigo-600 py-3 px-6 rounded-xl   shadow-md flex-row items-center"
              onPress={handleProceed}
            >
              <Text className="text-center font-urbanist text-white  text-lg mr-2">
                Proceed
              </Text>
              <AntDesign name="arrowright" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ServiceSelection;
