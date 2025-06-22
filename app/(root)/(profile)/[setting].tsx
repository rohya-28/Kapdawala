import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, ScrollView, Alert } from "react-native";
import { useEffect } from "react";

const settingData: Record<string, { content: string }> = {
  "saved-address": {
    content: "Manage your saved delivery locations here.",
  },
  "contact-details": {
    content: "Update your phone number and email address.",
  },
  "privacy": {
    content: "Control what data you share with us.",
  },
  "help-and-support": {
    content: "Need help? Our support team is here for you.",
  },
  "terms-and-conditions": {
    content: "Our terms of use and service policies.",
  },
  "report-a-problem": {
    content: "Found an issue? Let us know!",
  },
  "delete-account": {
    content: "Warning: This will permanently delete your account.",
  },
  "logout": {
    content: "You are now logged out.",
  },
};

export default function SettingScreen() {
  const { setting } = useLocalSearchParams();
  const router = useRouter();
  const key = String(setting);
  const data = settingData[key];

  useEffect(() => {
    if (key === "logout") {
      Alert.alert("Logged out", "You have been logged out.");
      // Add logout logic 
      // router.replace({ pathname: "/(tabs)/profile" }); 
    }
  }, [key]);

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold text-red-500">Page Not Found 14</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-12">
      <Text className="text-base text-gray-700">{data.content}</Text>
    </ScrollView>
  );
}
