import OrderTrackingCard from "@/components/orderTrack";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Stack } from "expo-router";

const OrdersScreen = () => {
  const router = useRouter();

  const handleViewOrderDetails = (orderId: string) => {
    router.push(`/(orders)/${orderId}`);
  };

  const featuredOrder = {
    orderId: "12345",
    status: "out_for_delivery" as "out_for_delivery",
    eta: "Tomorrow, 11:00 AM",
    imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=MyOrder"
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <Stack.Screen
        options={{
          title: "My Current Order",
          headerShown: true,
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#1F2937",
          headerTitleStyle: {
            fontWeight: '800',
          },
        }}
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} className="p-4">
        <View className="w-full max-w-xl items-center">
          <Text className="text-3xl font-extrabold text-gray-900 mb-8 mt-4 text-center">
            Your Latest Order
          </Text>
          <OrderTrackingCard
            orderId={featuredOrder.orderId}
            status={featuredOrder.status}
            eta={featuredOrder.eta}
            imageUrl={featuredOrder.imageUrl}
            onViewOrderDetails={handleViewOrderDetails}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;