import '../global.css';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SupabaseProvider } from '../contexts/SupabaseContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen once layout is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <SupabaseProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="user_registration" options={{ headerShown: false }} />
        <Stack.Screen name="driver_registration" options={{ headerShown: false }} />
        <Stack.Screen name="Rider" options={{ headerShown: false }} />
        <Stack.Screen name="Driver" options={{ headerShown: false }} />
        <Stack.Screen name="Admin" options={{ headerShown: false }} />
        <Stack.Screen name="confirm_registration" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SupabaseProvider>
  );
}
