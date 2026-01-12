import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        
        {/* Auth Screens */}
        <Stack.Screen name="(auth)/getstarted" />
        <Stack.Screen name="(auth)/sign-in" />
        <Stack.Screen name="(auth)/sign-up" />
        
        {/* Main App */}
        <Stack.Screen name="(tabs)" />
        
        {/* Action Screens - Modal Presentation */}
        <Stack.Screen 
          name="(actions)/send" 
          options={{ 
            presentation: 'modal',
            headerShown: false,
            headerTitle: 'Send Money',
            headerBackTitle: 'Cancel',
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
          name="(actions)/add-money" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Add Money',
            headerBackTitle: 'Cancel',
            animation: 'slide_from_bottom'
          }} 
        />
        <Stack.Screen 
          name="(actions)/convert" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Convert Currency',
            headerBackTitle: 'Cancel',
            animation: 'slide_from_bottom'
          }} 
        />
        <Stack.Screen 
          name="(actions)/withdraw" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Withdraw',
            headerBackTitle: 'Cancel',
            animation: 'slide_from_bottom'
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}