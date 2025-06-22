import { Stack } from "expo-router";
import 'react-native-reanimated';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
       <Stack.Screen name="bookOrder" options={{ headerShown: false }} />
       <Stack.Screen name="service" options={{ headerShown: false }} />
    </Stack>
    
  );
}
