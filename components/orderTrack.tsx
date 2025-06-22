import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'; // Ensure this is installed: npx expo install expo-linear-gradient

type OrderTrackingCardProps = {
  orderId: string;
  status: "pending" | "in_cleaning" | "out_for_delivery";
  eta: string;
  imageUrl: string;
  onViewOrderDetails: (orderId: string) => void; // Add a new prop for the button's action
};

const orderStages = [
  { label: "Pickup", icon: "box" },
  { label: "Cleaning", icon: "refresh-cw" },
  { label: "Delivery", icon: "truck" },
];

const statusMap = {
  pending: 0,
  in_cleaning: 1,
  out_for_delivery: 2,
};

const OrderTrackingCard = ({
  orderId,
  status,
  eta,
  imageUrl,
  onViewOrderDetails, // Destructure the new prop
}: OrderTrackingCardProps) => {
  const currentStageIndex = statusMap[status];

  return (
    <View className="bg-white rounded-2xl p-5 mb-6 mx-auto w-[95%] shadow-xl">
      {/* Title & Image */}
      <View className="flex-row items-center mb-5 border-b border-gray-100 pb-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-20 h-20 rounded-2xl mr-4 border border-gray-200 object-cover" // Larger image, more rounded
        />
        <View className="flex-1">
          <Text className="text-2xl font-extrabold text-gray-900 mb-1">Order #{orderId}</Text>
          <Text className="text-base text-gray-600">
            Delivery by: <Text className="font-bold text-indigo-700">{eta}</Text>
          </Text>
        </View>
        {/* Optional: Status Badge - more refined look */}
        <View className="bg-indigo-100 px-3 py-1 rounded-full">
             <Text className="text-indigo-700 text-xs font-semibold capitalize">
                {status.replace(/_/g, ' ')}
            </Text>
        </View>
      </View>

      {/* Tracking Timeline */}
      <View className="flex-row justify-between items-start mt-4 px-2 relative">
        {orderStages.map((stage, index) => {
          const isActiveStage = index <= currentStageIndex;
          const isCompletedStage = index < currentStageIndex;

          return (
            <View key={stage.label} className="items-center flex-1 z-10">
              <LinearGradient
                colors={isActiveStage ? ['#6366F1', '#4F46E5'] : ['#E0E0E0', '#B0B0B0']} // Indigo gradient for active, gray for inactive
                className={`w-16 h-16 rounded-full items-center justify-center border-2 ${
                  isActiveStage ? "border-indigo-500" : "border-gray-300"
                }`} // Border to match gradient start
              >
                <Feather
                  name={stage.icon as any}
                  size={26} // Even larger icon
                  color={isActiveStage ? "white" : "#6B7280"} // Darker gray for inactive icons
                />
              </LinearGradient>
              <Text
                className={`mt-3 text-sm text-center ${ // Slightly larger text
                  isActiveStage ? "text-gray-900 font-bold" : "text-gray-600"
                }`} // Stronger font for active, slightly darker for inactive
              >
                {stage.label}
              </Text>

              {/* Connecting Line - More robust visual connection */}
              {index < orderStages.length - 1 && (
                <LinearGradient
                    colors={isCompletedStage ? ['#6366F1', '#4F46E5'] : ['#D1D5DB', '#E5E7EB']} // Gradient for completed line, subtle gradient for uncompleted
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    className={`absolute h-1.5 top-[31px] left-[50%] right-[-50%] z-0 rounded-full`} // Thicker line, rounded ends
                    style={{ transform: [{ translateX: -3 }] }} // Keep centering adjustment
                />
              )}
            </View>
          );
        })}
      </View>

      {/* View Order Details Button */}
      <TouchableOpacity
        onPress={() => onViewOrderDetails(orderId)} // Pass the orderId to the parent's handler
        className="mt-6 bg-indigo-600 py-3 rounded-full flex-row items-center justify-center shadow-md shadow-indigo-500/50" // Attractive button styles
      >
        <Text className="text-white text-lg font-bold mr-2">View Order Details</Text>
        <Feather name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default OrderTrackingCard;