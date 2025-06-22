import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type OrderDetailsType = {
  id: string;
  items: { name: string; quantity: number; price: number; }[];
  totalPrice: number;
  currentStatus: string;
  pickupAddress: string;
  deliveryAddress: string;
  expectedDelivery: string;
};

const OrderDetailsPage = () => {
  const { orderId } = useLocalSearchParams(); 
  const [orderDetails, setOrderDetails] = useState<OrderDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        if (orderId === "12345") {
          setOrderDetails({
            id: "12345",
            items: [
              { name: "Shirt Dry Clean", quantity: 3, price: 150 },
              { name: "Pants Laundry", quantity: 2, price: 100 },
              { name: "Suit Press", quantity: 1, price: 200 },
            ],
            totalPrice: 650,
            currentStatus: "Out for Delivery",
            pickupAddress: "A-101, Green Apartments, Vitthal Nagar, Akola",
            deliveryAddress: "B-205, Sky View Homes, Ganesh Peth, Akola",
            expectedDelivery: "Today, June 22, 2025 by 6 PM",
          });
        } else if (orderId === "67890") {
          setOrderDetails({
            id: "67890",
            items: [
              { name: "Bed Sheets Wash", quantity: 1, price: 300 },
              { name: "Duvet Cover Dry Clean", quantity: 1, price: 250 },
            ],
            totalPrice: 550,
            currentStatus: "In Cleaning",
            pickupAddress: "Shop No. 5, City Market, Shivaji Nagar, Akola",
            deliveryAddress: "House 12, Lake View Colony, Ram Nagar, Akola",
            expectedDelivery: "Tomorrow, June 23, 2025 by 10 AM",
          });
        } else if (orderId === "901234") {
            setOrderDetails({
              id: "901234",
              items: [
                { name: "Suit Dry Clean", quantity: 1, price: 400 },
                { name: "Tie Dry Clean", quantity: 2, price: 50 },
                { name: "Dress Alteration", quantity: 1, price: 150 },
              ],
              totalPrice: 650,
              currentStatus: "Pending Pickup",
              pickupAddress: "Flat 7B, Star Towers, Old Cotton Market, Akola",
              deliveryAddress: "Plot 30, New Era Society, MIDC Area, Akola",
              expectedDelivery: "Monday, June 24, 2025 by 09:00 AM",
            });
        }
        else {
          setError(`Order #${orderId} not found.`);
        }
      } catch (err) {
        console.error("Failed to fetch order details:", err);
        setError("Failed to load order details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text className="mt-4 text-lg text-gray-700">Loading Order Details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50 p-5">
        <Feather name="alert-circle" size={48} color="red" />
        <Text className="mt-4 text-xl font-bold text-red-600">Error</Text>
        <Text className="mt-2 text-base text-gray-700 text-center">{error}</Text>
        <TouchableOpacity 
          className="mt-6 bg-indigo-600 py-3 px-6 rounded-full" 
          onPress={() => { setError(null); setLoading(true); }}
        >
             <Text className="text-white font-bold">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!orderDetails) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50 p-5">
        <Feather name="info" size={48} color="orange" />
        <Text className="mt-4 text-xl font-bold text-orange-600">No Order Found</Text>
        <Text className="mt-2 text-base text-gray-700 text-center">
            The order you are looking for does not exist.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50 p-5">
      <Stack.Screen options={{ title: `Order #${orderDetails.id}` }} />
      
      <View className="mt-6 bg-white rounded-xl p-5 mb-5 shadow-md">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-xl font-extrabold text-gray-900">Order Summary</Text>
          <View className="bg-indigo-100 px-3 py-1 rounded-full">
            <Text className="text-indigo-700 text-xs font-semibold capitalize">{orderDetails.currentStatus}</Text>
          </View>
        </View>
        <Text className="text-sm text-gray-600 mb-2">
            Order ID: <Text className="font-semibold">{orderDetails.id}</Text>
        </Text>
        <Text className="text-sm text-gray-600 mb-2">
            Expected Delivery: <Text className="font-semibold">{orderDetails.expectedDelivery}</Text>
        </Text>
        <Text className="text-sm text-gray-600">
            Total: <Text className="font-bold text-lg text-indigo-700">₹{orderDetails.totalPrice.toFixed(2)}</Text>
        </Text>
      </View>

      <View className="bg-white rounded-xl p-5 mb-5 shadow-md">
        <Text className="text-xl font-extrabold text-gray-900 mb-4">Items</Text>
        {orderDetails.items.map((item, index) => (
          <View key={index} className="flex-row justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <Text className="text-base text-gray-800">{item.name} (x{item.quantity})</Text>
            <Text className="text-base font-semibold text-gray-800">₹{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <View className="bg-white rounded-xl p-5 mb-5 shadow-md">
        <Text className="text-xl font-extrabold text-gray-900 mb-4">Addresses</Text>
        <View className="flex-row items-center mb-3">
          <Feather name="map-pin" size={20} color="#4F46E5" className="mr-3" />
          <View>
            <Text className="text-base font-semibold text-gray-800">Pickup Address:</Text>
            <Text className="text-sm text-gray-600">{orderDetails.pickupAddress}</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <Feather name="truck" size={20} color="#4F46E5" className="mr-3" />
          <View>
            <Text className="text-base font-semibold text-gray-800">Delivery Address:</Text>
            <Text className="text-sm text-gray-600">{orderDetails.deliveryAddress}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity className="mt-4 mb-10 bg-indigo-600 py-4 rounded-full flex-row items-center justify-center shadow-md shadow-indigo-500/50">
        <Feather name="message-circle" size={20} color="white" className="mr-2" />
        <Text className="text-white text-lg font-bold">Contact Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderDetailsPage;