import { Stack } from "expo-router";
import React, { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import RoleGuard from "../../../components/auth/RoleGuard";
import { SupabaseProvider } from "../../../contexts/SupabaseContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'LogIn',
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
      <RoleGuard allowedRole="driver">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="chat" />
          <Stack.Screen name="driver-dashboard" />
          <Stack.Screen name="driver-profile" />
          <Stack.Screen name="history" />
          <Stack.Screen name="vehicleinfo" options={{ presentation: 'modal' }} />
        </Stack>
      </RoleGuard>
    </SupabaseProvider>
  );
}