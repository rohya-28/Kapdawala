import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const sections = {
  Account: ["Saved Address", "Contact Details", "Privacy"],
  Support: ["Help and Support", "Terms and Conditions"],
  Actions: ["Report a Problem", "Delete Account", "Logout"],
};

const Profile = () => {
  const router = useRouter();

  const handlePress = (item: string) => {
    const slug = item.replace(/\s+/g, "-").toLowerCase();
    router.push({ pathname: "/(root)/(profile)/" + slug });
  };

  return (
    <ScrollView className="p-5 bg-white h-full">
      {Object.entries(sections).map(([sectionTitle, items]) => (
        <View key={sectionTitle} className="mt-6">
          <Text className="text-lg font-JakartaBold mb-3">{sectionTitle}</Text>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handlePress(item)}
              className="py-3 border-b border-gray-200"
            >
              <Text className="text-base text-gray-700">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Profile;
