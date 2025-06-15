import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

type OrderTrackingCardProps = {
  orderId: string;
  status: "pending" | "in_cleaning" | "out_for_delivery";
  eta: string;
  imageUrl: string;
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
}: OrderTrackingCardProps) => {
  const currentStage = statusMap[status];

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-md w-[95%] mt-2">
      {/* Title & Image */}
      <View className="flex-row items-center mb-4 ">
        <Image
          source={{ uri: imageUrl }}
          className="w-14 h-14 rounded-lg mr-4"
        />
        <View>
          <Text className="text-lg font-semibold text-black">Order #{orderId}</Text>
          <Text className="text-sm text-gray-500">ETA: {eta}</Text>
        </View>
      </View>

      {/* Tracking Timeline */}
      <View className="flex-row justify-between items-center mt-2 px-1">
        {orderStages.map((stage, index) => {
          const isActive = index <= currentStage;

          return (
            <View key={stage.label} className="items-center flex-1">
              <View
                className={`w-12 h-12 rounded-full items-center justify-center ${
                  isActive ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <Feather
                  name={stage.icon as any}
                  size={22}
                  color="white"
                />
              </View>
              <Text
                className={`mt-2 text-xs ${
                  isActive ? "text-black font-medium" : "text-gray-400"
                }`}
              >
                {stage.label}
              </Text>

              {/* Connecting Line */}
              {index < orderStages.length - 1 && (
                <View
                  className={`absolute top-6 left-full h-1 w-full ${
                    isActive && index < currentStage
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OrderTrackingCard;
