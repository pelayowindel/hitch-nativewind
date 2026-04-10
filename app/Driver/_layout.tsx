import { Stack } from 'expo-router';
import RoleGuard from '../../components/auth/RoleGuard';
import { SupabaseProvider } from '../../contexts/SupabaseContext';

export default function DriverLayout() {
  return (
    <SupabaseProvider>
      <RoleGuard allowedRole="driver">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="vehicleinfo" options={{ presentation: 'modal' }} />
          <Stack.Screen name="driverdocreview" />
          <Stack.Screen name="driverdocuments" />
        </Stack>
      </RoleGuard>
    </SupabaseProvider>
  );
}
