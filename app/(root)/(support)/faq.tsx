import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    question: "How do I place a laundry order?",
    answer:
      "Go to the home screen, select your service, choose a store, and click 'Book Now'.",
  },
  {
    question: "Can I track my laundry order?",
    answer:
      "Yes, you can track your order status from the 'Orders' tab. You’ll see real-time updates like Pickup, Cleaning, and Delivery.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Go to the 'Support' tab and select WhatsApp, Call, or Email options to reach us.",
  },
  {
    question: "Is home pickup and delivery available?",
    answer: "Yes, we offer free pickup and delivery across serviceable areas.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept UPI, Credit/Debit Cards, Wallets, and Cash on Delivery.",
  },
  {
    question: "What if my clothes get damaged or lost?",
    answer: "While we take utmost care, in the rare event of damage or loss, please contact our support team immediately. We have a policy in place to address such issues.",
  },
  {
    question: "How long does a typical laundry service take?",
    answer: "Standard laundry services usually take 24-48 hours. Express services may be available for quicker turnaround times at an additional charge.",
  },
  {
    question: "Do you offer dry cleaning services?",
    answer: "Yes, we offer both wash & fold and dry cleaning services. You can select your preferred service when placing an order.",
  },
];

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* --- Header Start --- */}
      <View className="flex-row items-center px-4 py-4 border-b border-gray-200">
        <BackButton />
        <Text className="flex-1 text-center text-xl font-urbanist text-gray-800 mr-8">
          FAQ & Help Center
        </Text>
        
        <View className="w-8" />
      </View>
      {/* --- Header End --- */}

      {/* FAQ List */}
      <ScrollView className="flex-1 p-4">
        <View className="space-y-4">
          {faqs.map((faq, index) => (
            <View
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden ${
                activeIndex === index ? "bg-indigo-50 border-indigo-300" : "bg-white"
              }`}
            >
              <TouchableOpacity
                onPress={() => toggleFAQ(index)}
                className="flex-row justify-between items-center p-4"
              >
                <Text className="flex-1 text-base font-urbanist text-gray-800 pr-2">
                  {faq.question}
                </Text>
                <MaterialIcons
                  name={activeIndex === index ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={24}
                  color="#4F46E5"
                />
              </TouchableOpacity>
              <Collapsible collapsed={activeIndex !== index}>
                <View className="p-4 pt-0">
                  <Text className="text-sm font-inter text-gray-600 leading-relaxed">
                    {faq.answer}
                  </Text>
                </View>
              </Collapsible>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;