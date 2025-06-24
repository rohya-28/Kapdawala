import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputField from "@/components/InputField";
import { icons, services, shopData } from "@/constants";
import { useCurrentLocation } from "@/hooks/useCurrentLocation";
import Shops from "@/components/shops";
import { router } from "expo-router";
import Button from "@/components/Button";

const Home = () => {
  const { location, errorMsg, loading, detectLocation } = useCurrentLocation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 pt-4 flex-1">
        {/* Top bar */}
        <View className="flex-row fixed top-0 items-center justify-between mb-4">
          <MaterialCommunityIcons name="bell-outline" size={28} color="#1e40af" />
          <Text className="text-2xl font-urbanist text-primary-600">Kapdawala</Text>
          <MaterialCommunityIcons name="help-circle-outline" size={28} color="#1e40af" />
        </View>

        {/* Search Input */}
        <InputField
          placeholder="Search for address or building"
          icon={icons.search}
          inputStyle="text-base"
          containerStyle="mt-2"
          iconStyle="tint-gray-500"
          autoCapitalize="none"
          label=""
        />

        {/* Detect Location */}
        <View className="mt-4">
          <Button
            onPress={detectLocation}
            title={loading ? "Detecting..." : "Detect My Location"}
            bgVariant="primary"
            textVariant="default"
            disabled={loading}
            className="rounded-lg font-inter"
          />
        </View>

        {/* Location Info */}
        {location && (
          <Text className="mt-2 text-sm text-gray-700 font-inter">
            📍 Lat: {location.latitude.toFixed(4)}, Lon: {location.longitude.toFixed(4)}
          </Text>
        )}
        {errorMsg && (
          <Text className="mt-2 text-red-500 text-sm">{errorMsg}</Text>
        )}

        {/* Services */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-urbanist text-black">Services</Text>
            <Text className="text-sm font-urbanist text-gray-500">See All &gt;</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                className="bg-blue-100 px-4 py-2 rounded-lg mr-3 items-center"
              >
                <Image
                  source={service.image}
                  className="w-20 h-20 rounded-md"
                  resizeMode="contain"
                />
                <Text className="text-blue-800 mt-2 font-JakartaSemiBold text-sm">
                  {service.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Shops List */}
        <ScrollView className="mt-6 mb-32" showsVerticalScrollIndicator={false}>
          {shopData.map((shop) => (
            <Shops
              key={shop.id}
              id={shop.id}
              title={shop.title}
              offer={shop.offer}
              services={shop.services}
              pickup={shop.pickup}
              rating={shop.rating}
              onBookNow={() =>
                router.push({
                  pathname: "/service",
                  params: {
                    storeId: shop.id,
                    storeName: shop.title,
                    offer: shop.offer,
                    pickup: shop.pickup,
                  },
                })
              }
              onDetails={() =>
                router.push({
                  pathname: "/(shops)/[id]",
                  params: {
                    id: shop.id,
                    title: shop.title,
                    offer: shop.offer,
                    services: shop.services,
                    pickup: shop.pickup,
                    rating: shop.rating.toString(),
                  },
                })
              }
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
