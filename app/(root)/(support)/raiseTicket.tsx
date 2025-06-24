import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

const RaiseTicket = () => {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Service");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!subject || !description) {
      return Alert.alert("Missing Fields", "Please fill all required fields.");
    }

    Alert.alert("Ticket Raised", "Our team will get back to you shortly.");

    
    setSubject("");
    setCategory("Service");
    setDescription("");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center  py-4 border-b border-gray-200 ">
        <BackButton />
        <Text className="text-2xl ml-4 font-urbanist  text-gray-800 ">
          Raise a Ticket
        </Text>
        </View>

        {/* Subject */}
        <Text className="text-base font-urbanist mt-8  text-gray-700 mb-1">Subject </Text>
        <TextInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Ex. Delay in delivery"
          className="border border-gray-300 rounded-md px-4 py-3 mb-4 text-base"
        />

        {/* Category */}
        <Text className="text-base font-urbanist text-gray-700 mb-1">Category *</Text>
        <View className="w-[90%]  flex-row space-x-3 mb-4  justify-between">
          {["Service", "Payment", "App", "Other"].map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl border ${
                category === cat
                  ? "bg-indigo-600 border-indigo-600"
                  : "border-gray-300"
              }`}
            >
              <Text
                className={`text-sm ${
                  category === cat ? "text-white" : "text-gray-700"
                }`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text className="text-base font-urbanist text-gray-700 mb-1">Description *</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Explain your issue in detail"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          className="border border-gray-300 rounded-md px-4 py-3 text-base"
        />

        {/* Submit */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="mt-6 bg-indigo-600 py-3 rounded-full flex-row items-center justify-center"
        >
          <Ionicons name="send" size={20} color="white" className="mr-2" />
          <Text className="text-white text-base font-urbanist">
            Submit Ticket
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RaiseTicket;
