import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type RecommendedCardProps = {
  id: string; // ✅ NEW: Accepts a unique identifier
  title: string;
  offer: string;
  services: string;
  pickup: string;
  rating: number;
  onBookNow?: () => void;
  onDetails?: (id: string) => void; // ✅ NEW: Passes id to details
};

const Shops = ({
  id,
  title,
  offer,
  services,
  pickup,
  rating,
  onBookNow,
  onDetails,
}: RecommendedCardProps) => {
  return (
    <View className="bg-white shadow-md p-4 rounded-xl mb-4">
      {/* Title */}
      <Text className="text-lg font-urbanist text-black mb-1">{title}</Text>

      {/* Offer and Services */}
      <Text className="text-sm text-green-600 font-inter">{offer}</Text>
      <Text className="text-sm text-gray-600 mt-1">{services}</Text>

      {/* Pickup & Rating */}
      <View className="flex flex-row justify-between items-center mt-2">
        <Text className="text-xs text-blue-500 font-inter">{pickup}</Text>
        <Text className="text-xs text-yellow-500 font-inter">⭐ {rating}</Text>
      </View>

      {/* Buttons */}
      <View className="flex flex-row justify-between mt-4">
        <TouchableOpacity
          className="bg-blue-600 px-4 py-2 rounded-md"
          onPress={onBookNow}
        >
          <Text className="text-white font-urbanist text-sm">Book Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-blue-600 px-4 py-2 rounded-md"
          onPress={() => onDetails?.(id)} // ✅ Pass id when calling onDetails
        >
          <Text className="text-blue-600 font-urbanist text-sm">Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shops;
