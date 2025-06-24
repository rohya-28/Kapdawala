import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type OrderTrackingCardProps = {
  orderId: string;
  status: "pending" | "in_cleaning" | "out_for_delivery";
  eta: string;
  imageUrl: ImageSourcePropType;
  onViewOrderDetails: (orderId: string) => void;
};

const orderStages = [
  { label: "Pickup", icon: "local-shipping" },
  { label: "Cleaning", icon: "local-laundry-service" },
  { label: "Delivery", icon: "delivery-dining" },
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
  onViewOrderDetails,
}: OrderTrackingCardProps) => {
  const currentStageIndex = statusMap[status];

  return (
    <View className="bg-white rounded-2xl p-5 mb-6 mx-auto w-[96%] shadow-md">
      {/* Header Section */}
      <View className="h-36 flex-row items-center justify-end mb-2">
        <Image
          source={imageUrl}
          className="w-20 h-20 rounded-2xl mr-4"
          resizeMode="cover"
        />
        <View className="flex-1 h-24 justify-evenly">
          <Text className="text-lg text-gray-900 font-semibold">
            Order #{orderId}
          </Text>
          <Text className="text-sm text-gray-600">
            Delivery by:{" "}
            <Text className="font-semibold text-indigo-700">{eta}</Text>
          </Text>
          <View className="bg-indigo-100 px-3 py-1 rounded-full w-fit mt-1">
            <Text className="text-indigo-700 text-xs font-semibold capitalize text-center">
              {status.replace(/_/g, " ")}
            </Text>
          </View>
        </View>
      </View>

      {/* Progress Tracker */}
      <View className="flex-row justify-between items-start mt-4 px-2 relative">
        {orderStages.map((stage, index) => {
          const isActive = index <= currentStageIndex;
          const isCompleted = index < currentStageIndex;

          return (
            <View key={stage.label} className="items-center  flex-1 z-10 ">
              {/* Circle with icon */}
              <LinearGradient
                colors={
                  isActive ? ["#6366F1", "#4F46E5"] : ["#E5E7EB", "#D1D5DB"]
                }
                className={`h-12 w-12 rounded-lg items-center justify-center border-2 ${
                  isActive ? "border-indigo-600" : "border-gray-300"
                }`}
              >
                <MaterialIcons
                  name={stage.icon as any}
                  size={20}
                  color={isActive ? "white" : "#6B7280"}
                  className=""
                />
              </LinearGradient>

              {/* Label */}
              <Text
                className={`mt-2 font-urbanist text-xs text-center ${
                  isActive ? "border-indigo-600 font-semibold" : "text-gray-500"
                }`}
              >
                {stage.label}
              </Text>

              {/* Connecting line */}
              {index < orderStages.length - 1 && (
                <LinearGradient
                  colors={
                    isCompleted
                      ? ["#6366F1", "#4F46E5"]
                      : ["#D1D5DB", "#E5E7EB"]
                  }
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  className="absolute h-1 top-[19px] left-[50%] right-[-50%] z-[-1] rounded-full"
                  style={{ transform: [{ translateX: -4 }] }}
                />
              )}
            </View>
          );
        })}
      </View>

      {/* View Details Button */}
      <TouchableOpacity
        onPress={() => onViewOrderDetails(orderId)}
        className="mt-6 bg-indigo-600 py-3 rounded-full flex-row items-center justify-center shadow-md"
      >
        <Text className="text-white font-medium mr-2">View Order Details</Text>
        <MaterialIcons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default OrderTrackingCard;
