import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router"; // Assuming these are correctly set up
import { SafeAreaView } from "react-native-safe-area-context"; // For better layout on different devices

const ShopDetails = () => {
  const router = useRouter(); // If not used directly here, it's good to keep if you plan navigation
  const { id, offer, services, pickup, rating } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 0 mt-12">
      <ScrollView className="flex-1 p-4">
        {/* Shop Header Section */}
        <View className="bg-white rounded-xl shadow-md p-5 mb-4">
          <Text className="text-3xl font-extrabold text-gray-800 mb-2">{id || "Shop Name"}</Text>
          <View className="flex-row items-center mb-1">
            <Text className="text-lg font-semibold text-green-600 mr-2">{offer || "No Offer"}</Text>
            {rating && (
              <View className="flex-row items-center bg-yellow-400 px-2 py-1 rounded-full">
                <Text className="text-white text-base font-bold mr-1">⭐</Text>
                <Text className="text-white text-base font-bold">{rating}</Text>
              </View>
            )}
          </View>
          <Text className="text-gray-600 text-base">{services || "Services not listed"}</Text>
        </View>

        {/* Details Section */}
        <View className="bg-white rounded-xl shadow-md p-5 mb-4">
          <Text className="text-xl font-bold text-gray-800 mb-3">Key Details</Text>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-gray-700 text-base">
              <Text className="font-semibold">Pickup:</Text> {pickup || "Not specified"}
            </Text>
          </View>
          {/* You could add more details here, e.g., working hours, address */}
        </View>

        {/* Description Section */}
        <View className="bg-white rounded-xl shadow-md p-5 mb-4">
          <Text className="text-xl font-bold text-gray-800 mb-3">About Us</Text>
          <Text className="text-gray-700 text-base leading-relaxed">
            This shop offers premium cleaning services with best-in-class customer support and timely pickups. You can rely on their ratings and past customer experiences for a top-notch service. We are committed to providing an exceptional and hassle-free experience for all your cleaning needs.
          </Text>
        </View>

        {/* Call to Action/Other sections could go here */}
        {/* Example: A button to book a service */}
        <View className="mt-4">
          <Text className="bg-blue-600 text-white text-center py-4 rounded-xl text-lg font-semibold"
            onPress={() => router.push({pathname: "/service"}, )} // Replace with actual navigation/action
          >
            Book Service Now
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopDetails;