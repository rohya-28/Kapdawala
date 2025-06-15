import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  View,
} from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-blue-600" : ""}`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-blue-600" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Tabs
       
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0C0C0C",
            borderRadius: 30,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 20,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.home} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Invite",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.person} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="support"
          options={{
            title: "support",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.person} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.person} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </KeyboardAvoidingView>
  );
}
