import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SupportPage = () => {
  const router = useRouter();

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/919999999999?text=Hi, I need help with my order');
  };

  const handleCall = () => {
    Linking.openURL('tel:+919999999999');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:support@kapdewala.com?subject=Need Help&body=My issue is...');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <Text className="text-2xl ml-2 font-urbanist  text-indigo-700 mb-6">Support & Help</Text>

        {/* FAQs */}
        <TouchableOpacity onPress={() => router.push('/(support)/faq')} className="flex-row items-center mb-5 p-4 rounded-xl bg-indigo-50">
          <Ionicons name="help-circle-outline" size={24} color="#4F46E5" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">FAQs & Help Center</Text>
        </TouchableOpacity>

        {/* WhatsApp */}
        <TouchableOpacity onPress={handleWhatsApp} className="flex-row items-center mb-5 p-4 rounded-xl bg-green-50">
          <FontAwesome name="whatsapp" size={24} color="green" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">Chat on WhatsApp</Text>
        </TouchableOpacity>

        {/* Call Support */}
        <TouchableOpacity onPress={handleCall} className="flex-row items-center mb-5 p-4 rounded-xl bg-yellow-50">
          <Ionicons name="call-outline" size={24} color="#F59E0B" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">Call Support</Text>
        </TouchableOpacity>

        {/* Email Support */}
        <TouchableOpacity onPress={handleEmail} className="flex-row items-center mb-5 p-4 rounded-xl bg-blue-50">
          <MaterialIcons name="email" size={24} color="#3B82F6" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">Email Us</Text>
        </TouchableOpacity>

        {/* Raise a Ticket */}
        <TouchableOpacity onPress={() => router.push('/(support)/raiseTicket')} className="flex-row items-center mb-5 p-4 rounded-xl bg-red-50">
          <MaterialIcons name="support-agent" size={24} color="#EF4444" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">Raise a Support Ticket</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(support)/chat')} className="flex-row items-center mb-5 p-4 rounded-xl bg-red-50">
          <MaterialIcons name="support-agent" size={24} color="#EF4444" className="mr-3" />
          <Text className="text-lg font-semibold text-gray-800">Chat Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportPage;
