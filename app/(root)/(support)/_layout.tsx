import { Stack } from "expo-router";
import 'react-native-reanimated';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
       <Stack.Screen name="faq" options={{ headerShown: false }} />
       <Stack.Screen name="chat" options={{ headerShown: false }} />
       <Stack.Screen name="raiseTicket" options={{ headerShown: false }} />
    </Stack>
    
  );
}
