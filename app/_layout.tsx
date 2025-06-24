import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Urbanist_700Bold,
  Urbanist_600SemiBold,
} from '@expo-google-fonts/urbanist';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync(); // 

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // 
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // 
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
