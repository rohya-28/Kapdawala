import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"; 
import { useEffect, useState } from "react"; 
import BackButton from "@/components/BackButton";


const CustomAlertModal = ({ visible, title, message, onClose }) => {
  if (!visible) return null;

  return (
    <View className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <View className="bg-white rounded-lg p-6 shadow-xl w-11/12 max-w-sm">
        <Text className="text-xl font-bold text-gray-900 mb-4 text-center">{title}</Text>
        <Text className="text-gray-700 text-base mb-6 text-center">{message}</Text>
        <TouchableOpacity
          onPress={onClose}
          className="bg-indigo-600 py-3 rounded-md items-center"
        >
          <Text className="text-white text-base font-semibold">OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const settingData: Record<string, { title: string; content: string }> = {
  "saved-address": {
    title: "Saved Addresses",
    content: "Manage your saved delivery locations here. You can add new addresses, edit existing ones, or set a default address for faster checkouts.",
  },
  "contact-details": {
    title: "Contact Details",
    content: "Update your phone number and email address to ensure we can always reach you regarding your orders and account.",
  },
  "privacy": {
    title: "Privacy Settings",
    content: "Control what data you share with us and manage your privacy preferences. We are committed to protecting your personal information.",
  },
  "help-and-support": {
    title: "Help and Support",
    content: "Need assistance? Our comprehensive help center and support team are here to guide you through any issues or questions.",
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
    content: "Read our full terms of use and service policies. By using our services, you agree to abide by these conditions.",
  },
  "report-a-problem": {
    title: "Report a Problem",
    content: "Found an issue or bug? Please describe it in detail so our technical team can investigate and provide a solution promptly.",
  },
  "delete-account": {
    title: "Delete Account",
    content: "Warning: Deleting your account is a permanent action. All your data and order history will be removed. Please proceed with caution.",
  },
  "logout": {
    title: "Logout",
    content: "You will be securely logged out of your account. You can log back in anytime.",
  },
};

export default function SettingScreen() {
  const { setting } = useLocalSearchParams();
  const router = useRouter();
  const key = String(setting);
  const data = settingData[key];


  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (title: string, message: string) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    
    if (key === "logout") {
        router.replace("/(tabs)/profile"); 
    }
  };

  useEffect(() => {
    if (key === "logout") {
      showModal("Logged out", "You have been logged out.");
     
    }
  }, [key]); 

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center bg-white p-4">
        <Text className="text-3xl font-urbanist text-red-500 font-bold mb-2">404</Text>
        <Text className="text-xl font-urbanist text-gray-700">Page Not Found</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-6 bg-indigo-600 px-6 py-3 rounded-full"
        >
          <Text className="text-white text-base font-urbanist font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
     
      <View className="flex-row mt-8 items-center px-4 py-4 border-b border-gray-200">
        <BackButton />
        <Text className="flex-1 text-center text-xl font-urbanist text-gray-800 mr-8">
          {data.title} 
        </Text>

        <View className="w-8" />
      </View>

      <ScrollView className="flex-1 px-4 py-6" contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Content Card/Block */}
        <View className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <Text className="text-base font-inter text-gray-700 leading-relaxed">
            {data.content}
          </Text>
         
          {key === "contact-details" && (
            <TouchableOpacity className="mt-6 bg-indigo-600 py-3 rounded-md items-center">
              <Text className="text-white text-base font-semibold">Edit Contact Info</Text>
            </TouchableOpacity>
          )}
          {key === "delete-account" && (
            <TouchableOpacity className="mt-6 bg-red-600 py-3 rounded-md items-center">
              <Text className="text-white text-base font-semibold">Confirm Delete Account</Text>
            </TouchableOpacity>
          )}
           {key === "saved-address" && (
            <TouchableOpacity className="mt-6 bg-indigo-600 py-3 rounded-md items-center">
              <Text className="text-white text-base font-semibold">Manage Addresses</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

     
      <CustomAlertModal
        visible={modalVisible}
        title={modalTitle}
        message={modalMessage}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
}