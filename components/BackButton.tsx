import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const BackButton = ({ label = "Back" }: { label?: string }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="flex-row items-center space-x-2 "
    >
      <View className="px-2 py-2 bg-indigo-600 rounded-xl">
         <MaterialIcons name="arrow-back" size={24} color="white" />
      </View>
     
    </TouchableOpacity>
  );
};

export default BackButton;
