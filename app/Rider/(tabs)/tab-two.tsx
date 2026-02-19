import { View, Text } from 'react-native';

export default function RiderTripsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-6">
      <Text className="text-2xl font-semibold text-sky-700">Trips</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        See upcoming rides, receipts, and support options.
      </Text>
    </View>
  );
}
