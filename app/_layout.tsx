// app/_layout.tsx
import { Stack } from 'expo-router';
import SafeScreen from '@/components/SafeScreen';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="(auth)/getstarted" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeScreen>
  );
}