import OrderTrackingCard from "@/components/orderTrack";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { featuredOrders } from "@/constants";

const OrdersScreen = () => {
  const router = useRouter();

  const handleViewOrderDetails = (orderId: string) => {
    router.push(`/(orders)/${orderId}`);
  };



  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{
          paddingVertical: 24,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text className="text-xl font-urbanist font-bold  text-gray-900 mb-6">
          Track Your Order
        </Text>


        {/* Order Card */}
        {featuredOrders.map((order) => (
  <OrderTrackingCard
    key={order.orderId}
    orderId={order.orderId}
    status={order.status}
    eta={order.eta}
    imageUrl={order.image}
    onViewOrderDetails={handleViewOrderDetails}
  />
))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
