import { View, Text } from 'react-native';

export default function DriverDashboardScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold text-amber-600">Driver dashboard</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        Go online, accept rides, and manage availability.
      </Text>
    </View>
  );
}
