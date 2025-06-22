import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useCurrentLocation } from "@/hooks/useCurrentLocation"; // adjust path if needed
import Shops from "@/components/shops";

const Home = () => {
  const { location, errorMsg, loading, detectLocation } = useCurrentLocation();
  const services = ["Washing", "Ironing", "Wash & Iron","Washing", "Ironing", "Wash & Iron"];

  return (
    <SafeAreaView>
      <View className="w-full flex justify-center items-center">
       
        <View className="w-[94%] mt-4 flex flex-row items-center justify-between">
          <MaterialCommunityIcons name="bell-outline" size={28} color="red" />
          <Text className="text-center font-JakartaExtraBold text-2xl text-blue-700">
            Kapdawala
          </Text>
          <MaterialCommunityIcons name="bird" size={28} color="red" />
        </View>

        
        <View className="w-[94%] mt-4">
          <InputField
            placeholder="Search for address or building"
            icon={icons.search}
            inputStyle="text-base"
            containerStyle="mt-2"
            iconStyle="tint-gray-500"
            autoCapitalize="none"
            label=""
          />
        </View>

     
        <TouchableOpacity
          className="w-[94%] mt-4 bg-blue-600 rounded-md p-3"
          onPress={detectLocation}
          disabled={loading}
        >
          <Text className="text-white text-center font-JakartaBold">
            {loading ? "Detecting..." : "Detect My Location"}
          </Text>
        </TouchableOpacity>

        {location && (
          <Text className="mt-2 text-sm text-gray-700">
            📍 Lat: {location.latitude.toFixed(4)}, Lon: {location.longitude.toFixed(4)}
          </Text>
        )}
        {errorMsg && (
          <Text className="mt-2 text-red-500 text-sm">{errorMsg}</Text>
        )}

    <View className="w-[94%] mt-6">
     
      <View className="flex flex-row items-center justify-between mb-3">
        <Text className="text-lg font-JakartaBold text-black">Services</Text>
        <Text className="text-sm text-gray-500">See All</Text>
      </View>

     
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue-100 px-4 py-2 rounded-full mr-3"
          >
            <Text className="text-blue-800 font-JakartaSemiBold text-sm">
              {service}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

    <View className="w-[94%] mt-4">
    <Shops
    title="Laundry King"
    offer="Flat 20% off on all services"
    services="Washing, Ironing, Dry Clean"
    pickup="Free Pickup & Delivery"
    rating={4.5}
    onBookNow={() => console.log("Book Now pressed")}
    onDetails={() => console.log("Details pressed")}
    />
    </View>


      </View>
    </SafeAreaView>
  );
};

export default Home;
