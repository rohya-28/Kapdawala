import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const sections = {
  Account: [
    { name: "Saved Address", icon: "location-outline", slug: "saved-address" },
    { name: "Contact Details", icon: "call-outline", slug: "contact-details" },
    { name: "Privacy", icon: "lock-closed-outline", slug: "privacy" },
    { name: "Notification Settings", icon: "notifications-outline", slug: "notification-settings" }, // Added more
    { name: "Payment Methods", icon: "card-outline", slug: "payment-methods" }, // Added more
  ],
  Support: [
    { name: "Help and Support", icon: "help-circle-outline", slug: "help-and-support" },
    { name: "Terms and Conditions", icon: "document-text-outline", slug: "terms-and-conditions" },
    { name: "Privacy Policy", icon: "shield-checkmark-outline", slug: "privacy-policy" }, // Added more
  ],
  Actions: [
    { name: "Report a Problem", icon: "alert-circle-outline", slug: "report-a-problem" },
    { name: "Change Password", icon: "key-outline", slug: "change-password" }, // Added more
    { name: "Delete Account", icon: "trash-outline", slug: "delete-account" },
    { name: "Logout", icon: "log-out-outline", slug: "logout" },
  ],
  // Add another section to ensure overflow
};

const Profile = () => {
  const router = useRouter();

  const handlePress = (slug: string) => {
    if (slug === "logout") {
      console.log("User logged out!");
      // In a real app, you'd perform logout actions here (e.g., clear tokens, navigate to login)
      // router.replace('/login');
      return;
    }
    router.push({ pathname: "/(root)/(profile)/" + slug });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-5 border-b border-gray-200">
        <Text className="text-2xl font-urbanist mt-4 mb-2 text-gray-900 font-bold">Profile</Text>
      </View>

      {/* Main ScrollView*/}
      <ScrollView
        className="flex-1 px-4 py-2"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} 
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(sections).map(([sectionTitle, items]) => (
          <View key={sectionTitle} className="mt-6 mb-4">
            <Text className="text-lg font-urbanist text-gray-600 mb-3 ml-1">
              {sectionTitle}
            </Text>
            <View className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {items.map((item, index) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => handlePress(item.slug)}
                  className={`flex-row items-center justify-between px-4 py-4 ${
                    index < items.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <View className="flex-row items-center">
                    {item.icon && (
                      <Ionicons
                        name={item.icon as any}
                        size={22}
                        color={sectionTitle === "Actions" && (item.name === "Delete Account" || item.name === "Logout") ? "#EF4444" : "#4B5563"}
                        className="mr-3"
                      />
                    )}
                    <Text
                      className={`font-inter text-base ${
                        sectionTitle === "Actions" && (item.name === "Delete Account" || item.name === "Logout") ? "text-red-500" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;